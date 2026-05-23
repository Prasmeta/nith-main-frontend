/**
 * Binds backend data into existing CSE HTML (no layout rewrite).
 */
(function () {
  if (!window.CSEApi) return;

  var page = document.body.getAttribute('data-cse-page');
  if (!page) return;

  function langFromSelect() {
    var sel = document.querySelector('.lang-select');
    if (!sel) return CSEApi.getLanguage();
    if (sel.value === 'hi' || sel.value === 'en') return sel.value;
    return sel.selectedIndex === 1 ? 'hi' : 'en';
  }

  function wireLanguageSelect(reload) {
    var sel = document.querySelector('.lang-select');
    if (!sel) return;
    var current = CSEApi.getLanguage();
    sel.selectedIndex = current === 'hi' ? 1 : 0;
    sel.addEventListener('change', function () {
      CSEApi.setLanguage(langFromSelect());
      reload();
    });
  }

  function bindMain() {
    var lang = langFromSelect();
    Promise.all([
      CSEApi.fetch('', lang),
      CSEApi.fetch('/programmes', lang),
      CSEApi.fetch('/mission-vision', lang),
      CSEApi.fetch('/research-areas', lang),
    ])
      .then(function (results) {
        var dept = results[0].success && results[0].data ? results[0].data : null;
        var programmes = results[1].success && results[1].data ? results[1].data : [];
        var mission = results[2].success && results[2].data ? results[2].data : null;
        var areas = results[3].success && results[3].data ? results[3].data : [];

        var img = document.querySelector('.department-image');
        if (img && dept && dept.dept_image_url) {
          img.src = dept.dept_image_url;
        }

        var heading = document.querySelector('.content h1');
        if (heading && dept) {
          var h = CSEApi.field(dept, 'intro_heading');
          if (h) heading.textContent = h;
        }

        var introParas = document.querySelectorAll('.content > p');
        if (dept && introParas.length) {
          var desc = CSEApi.field(dept, 'intro_description');
          if (desc) {
            var parts = desc.split(/\n\n+/);
            introParas[0].textContent = parts[0] || desc;
            if (introParas[1] && parts[1]) introParas[1].textContent = parts[1];
          }
        }

        var grid = document.querySelector('.programmes-grid');
        if (grid && programmes.length) {
          grid.innerHTML = programmes
            .map(function (p) {
              return (
                '<div class="programme-card">' +
                '<div class="programme-icon">' +
                (CSEApi.field(p, 'icon_emoji') || '🎓') +
                '</div>' +
                '<h3>' +
                (CSEApi.field(p, 'title') || CSEApi.field(p, 'programme_type')) +
                '</h3>' +
                '<p>' +
                CSEApi.field(p, 'description') +
                '</p>' +
                '</div>'
              );
            })
            .join('');
        }

        var missionBox = document.querySelector('.mission-box');
        if (missionBox && mission) {
          var mh = missionBox.querySelector('h2');
          var mp = missionBox.querySelector('p');
          var ul = missionBox.querySelector('.mission-list');
          if (mh && CSEApi.field(mission, 'mission_heading')) {
            mh.textContent = CSEApi.field(mission, 'mission_heading');
          }
          if (mp && CSEApi.field(mission, 'mission_description')) {
            mp.textContent = CSEApi.field(mission, 'mission_description');
          }
          var points = CSEApi.parsePoints(mission.mission_points);
          if (ul && points.length) {
            ul.innerHTML = points.map(function (pt) {
              return '<li>' + pt + '</li>';
            }).join('');
          }
        }

        var researchGrid = document.querySelector('.research-grid');
        if (researchGrid && areas.length) {
          researchGrid.innerHTML = areas
            .map(function (a) {
              return (
                '<div><h3>' +
                CSEApi.field(a, 'area_name') +
                '</h3><p>' +
                CSEApi.field(a, 'description') +
                '</p></div>'
              );
            })
            .join('');
        }

        var researchBtn = document.querySelector('.research-btn');
        if (researchBtn) researchBtn.setAttribute('href', 'cse_research.html');
      })
      .catch(function (err) {
        console.warn('[CSE] main page API:', err.message);
      });
  }

  function bindVision() {
    var lang = langFromSelect();
    CSEApi.fetch('/mission-vision', lang)
      .then(function (res) {
        if (!res.success || !res.data) return;
        var m = res.data;
        var sections = document.querySelectorAll('.content .section');
        if (sections[0]) {
          var vh = sections[0].querySelector('h2');
          var vp = sections[0].querySelector('p');
          if (vh && CSEApi.field(m, 'mission_heading')) vh.textContent = 'Our Vision';
          if (vp && CSEApi.field(m, 'mission_heading')) vp.textContent = CSEApi.field(m, 'mission_heading');
        }
        if (sections[1]) {
          var mh = sections[1].querySelector('h2');
          if (mh) mh.textContent = 'Our Mission';
          var paras = sections[1].querySelectorAll('p');
          var desc = CSEApi.field(m, 'mission_description');
          if (paras[0] && desc) paras[0].textContent = desc;
          var points = CSEApi.parsePoints(m.mission_points);
          if (points.length && paras[1]) {
            paras[1].textContent = points.join(' ');
          }
        }
      })
      .catch(function (err) {
        console.warn('[CSE] vision API:', err.message);
      });
  }

  function bindFaculty() {
    var lang = langFromSelect();
    CSEApi.fetch('/faculty?active_only=true', lang)
      .then(function (res) {
        if (!res.success || !res.data || !res.data.length) return;
        var list = res.data;
        var content = document.querySelector('.content');
        if (!content) return;

        var staticBlocks = content.querySelectorAll('.faculty-category');
        staticBlocks.forEach(function (el) {
          el.style.display = 'none';
        });

        var mount = document.getElementById('cse-faculty-mount');
        if (!mount) {
          mount = document.createElement('div');
          mount.id = 'cse-faculty-mount';
          content.appendChild(mount);
        }

        var byPosition = {};
        list.forEach(function (f) {
          var pos = CSEApi.field(f, 'position') || 'Faculty';
          if (!byPosition[pos]) byPosition[pos] = [];
          byPosition[pos].push(f);
        });

        mount.innerHTML = Object.keys(byPosition)
          .map(function (pos) {
            var cards = byPosition[pos]
              .map(function (f) {
                var photo = f.photo_url || 'faculty2.jpg';
                var bio = CSEApi.field(f, 'bio') || CSEApi.field(f, 'specialization');
                return (
                  '<div class="faculty-card">' +
                  '<img src="' +
                  photo +
                  '" alt="Faculty">' +
                  '<div class="faculty-info"><h3>' +
                  CSEApi.field(f, 'name') +
                  '</h3><p>' +
                  pos +
                  '</p></div>' +
                  '<div class="faculty-overlay"><h3>' +
                  CSEApi.field(f, 'name') +
                  '</h3><p>' +
                  bio +
                  '</p><p class="email">' +
                  CSEApi.field(f, 'email') +
                  '</p></div></div>'
                );
              })
              .join('');
            return (
              '<div class="faculty-category"><h2>' +
              pos +
              '</h2><div class="faculty-grid">' +
              cards +
              '</div></div>'
            );
          })
          .join('');
      })
      .catch(function (err) {
        console.warn('[CSE] faculty API:', err.message);
      });
  }

  function bindLabs() {
    var lang = langFromSelect();
    CSEApi.fetch('/labs', lang)
      .then(function (res) {
        if (!res.success || !res.data || !res.data.length) return;
        var tbody = document.querySelector('.staff-table');
        if (!tbody) return;
        var rows = tbody.querySelectorAll('tr');
        for (var i = 1; i < rows.length; i++) rows[i].remove();
        res.data.forEach(function (lab, idx) {
          var tr = document.createElement('tr');
          tr.innerHTML =
            '<td>' +
            (idx + 1) +
            '</td><td>' +
            CSEApi.field(lab, 'lab_name') +
            '</td>';
          tbody.appendChild(tr);
        });
      })
      .catch(function (err) {
        console.warn('[CSE] labs API:', err.message);
      });
  }

  function bindResearch() {
    var lang = langFromSelect();
    CSEApi.fetch('/publications', lang)
      .then(function (res) {
        if (!res.success || !res.data || !res.data.length) return;
        var table = document.querySelector('.pub-table');
        if (!table) return;
        var rows = table.querySelectorAll('tr');
        for (var i = 1; i < rows.length; i++) rows[i].remove();

        var meta = document.querySelector('.meta');
        if (meta) {
          meta.innerHTML =
            'Found ' +
            res.data.length +
            ' publications from department database';
        }

        res.data.forEach(function (pub) {
          var tr = document.createElement('tr');
          var year = pub.published_at
            ? String(pub.published_at).slice(0, 4)
            : '-';
          tr.innerHTML =
            '<td>' +
            year +
            '</td><td>' +
            CSEApi.field(pub, 'authors') +
            '</td><td>' +
            CSEApi.field(pub, 'title') +
            '</td><td>' +
            CSEApi.field(pub, 'venue') +
            '</td><td>-</td>';
          table.appendChild(tr);
        });
      })
      .catch(function (err) {
        console.warn('[CSE] publications API:', err.message);
      });
  }

  function bindContact() {
    var lang = langFromSelect();
    CSEApi.fetch('/contact', lang)
      .then(function (res) {
        if (!res.success || !res.data) return;
        var c = res.data;
        var box = document.querySelector('.contact-box');
        if (!box) return;
        var hod = CSEApi.field(c, 'head_of_dept_name') || 'Head of Department';
        var addr = CSEApi.field(c, 'office_address');
        box.innerHTML =
          '<h2>Contact Information</h2>' +
          '<p><span class="label">' +
          hod +
          '</span></p>' +
          '<p>Head of Department</p>' +
          '<p>Computer Science & Engineering</p>' +
          (addr
            ? '<p>' + addr.replace(/\n/g, '</p><p>') + '</p>'
            : '<p>National Institute of Technology Hamirpur</p>') +
          '<br>' +
          '<p><span class="label">Phone No.:</span> ' +
          CSEApi.field(c, 'phone', '-') +
          '</p>' +
          '<p><span class="label">HoD Email:</span> ' +
          CSEApi.field(c, 'head_of_dept_email', '-') +
          '</p>' +
          '<p><span class="label">Office Email:</span> ' +
          CSEApi.field(c, 'email', '-') +
          '</p>' +
          (CSEApi.field(c, 'website_url')
            ? '<p><span class="label">Website:</span> <a href="' +
              c.website_url +
              '">' +
              c.website_url +
              '</a></p>'
            : '');
      })
      .catch(function (err) {
        console.warn('[CSE] contact API:', err.message);
      });
  }

  function wireSidebar() {
    var links = document.querySelectorAll('.sidebar-menu a');
    var map = {
      'Vision & Mission': 'cse_vision.html',
      'Vision &amp; Mission': 'cse_vision.html',
      Faculty: 'cse_faculty.html',
      Staff: 'cse_staff.html',
      'Programme Offered': 'cse.html',
      Labs: 'cse_labs.html',
      'Research Publications': 'cse_research.html',
      Contact: 'cse_contact.html',
    };
    var apiQ = '';
    try {
      var root = CSEApi.getApiRoot();
      if (root) apiQ = '?api=' + encodeURIComponent(root);
    } catch (e) {}

    links.forEach(function (a) {
      var text = (a.textContent || '').trim();
      if (map[text]) {
        a.setAttribute('href', map[text] + apiQ);
      } else if (a.getAttribute('href') === '#' || a.getAttribute('href') === '') {
        a.setAttribute('href', 'cse.html' + apiQ);
      }
    });
  }

  function run() {
    wireSidebar();
    if (page === 'main') bindMain();
    else if (page === 'vision') bindVision();
    else if (page === 'faculty') bindFaculty();
    else if (page === 'labs') bindLabs();
    else if (page === 'research') bindResearch();
    else if (page === 'contact') bindContact();

    wireLanguageSelect(run);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

