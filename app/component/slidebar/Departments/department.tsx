import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ChevronRight, ArrowUpRight, Cpu, Atom, Library } from 'lucide-react';

const departmentData = [
  {
    id: '01',
    category: 'Engineering',
    category2: 'अभियांत्रिकी', // Hindi Category
    icon: Cpu,
    sections: [
      {
        title: 'B.Tech / M.Tech',
        title2: 'बी.टेक / एम.टेक', // Hindi Section Title
        links: [
          {
            title: 'Computer Science & Engineering',
            title2: 'कंप्यूटर विज्ञान और इंजीनियरिंग',
            href: '/faculty-section/department/cse',
          },
          {
            title: 'Civil Engineering',
            title2: 'सिविल इंजीनियरिंग',
            href: '#',
          },
          {
            title: 'Chemical Engineering',
            title2: 'केमिकल इंजीनियरिंग',
            href: '#',
          },
          {
            title: 'Electronics & Comm. Engineering',
            title2: 'इलेक्ट्रॉनिक्स और संचार इंजीनियरिंग',
            href: '#',
          },
          {
            title: 'Electrical Engineering',
            title2: 'इलेक्ट्रिकल इंजीनियरिंग',
            href: '#',
          },
          {
            title: 'Mechanical Engineering',
            title2: 'मैकेनिकल इंजीनियरिंग',
            href: '#',
          },
          {
            title: 'Material Science & Engineering',
            title2: 'पदार्थ विज्ञान और इंजीनियरिंग',
            href: '/faculty-section/department/msc',
          },
        ],
      },
    ],
  },
  {
    id: '02',
    category: 'Sciences',
    category2: 'विज्ञान', // Hindi Category
    icon: Atom,
    sections: [
      {
        title: 'Pure Sciences',
        title2: 'शुद्ध विज्ञान', // Hindi Section Title
        links: [
          {
            title: 'Chemistry',
            title2: 'रसायन विज्ञान',
            href: '/faculty-section/department/chem',
          },
          {
            title: 'Mathematics & Scientific Computing',
            title2: 'गणित और वैज्ञानिक कंप्यूटिंग',
            href: '/faculty-section/department/mnc',
          },
          {
            title: 'Physics & Photonics Science',
            title2: 'भौतिकी और फोटोनिक्स विज्ञान',
            href: '/faculty-section/department/phy',
          },
        ],
      },
      {
        title: 'Centres',
        title2: 'केंद्र', // Hindi Section Title
        links: [
          {
            title: 'Centre For Energy Studies',
            title2: 'ऊर्जा अध्ययन केंद्र',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    id: '03',
    category: 'Liberal Arts',
    category2: 'उदार कला', // Hindi Category
    icon: Library,
    sections: [
      {
        title: 'Professional Schools',
        title2: 'व्यावसायिक स्कूल', // Hindi Section Title
        links: [
          {
            title: 'Architecture',
            title2: 'वास्तुकला',
            href: '#',
          },
          {
            title: 'Management Studies',
            title2: 'प्रबंधन अध्ययन',
            href: '#',
          },
        ],
      },
      {
        title: 'Humanities',
        title2: 'मानविकी', // Hindi Section Title
        links: [
          {
            title: 'Humanities & Social Sciences',
            title2: 'मानविकी और सामाजिक विज्ञान',
            href: '#',
          },
        ],
      },
    ],
  },
];

function Department() {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {departmentData.map((column) => (
            <div key={column.id} className="flex flex-col">
              {/* Column Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group/header">
                <span className="font-mono text-base sm:text-lg md:text-xl text-gray-200 group-hover/header:text-[#800000] transition-colors duration-300">
                  {column.id}
                </span>
                <div className="flex items-center gap-1 sm:gap-2 border-l-2 border-[#800000] pl-2 sm:pl-3">
                  <column.icon
                    size={14}
                    className="text-gray-400 group-hover/header:text-gray-900 transition-colors sm:w-4 sm:h-4"
                  />
                  <h3 className="text-[clamp(10px,2vw,14px)] font-bold uppercase tracking-wider text-gray-800">
                    {language == 'en' ? column.category : column.category2}
                  </h3>
                </div>
              </div>

              {/* Sub-Sections Loop */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {column.sections.map((section, idx) => (
                  <div key={idx} className="group/section">
                    {/* Sub-Section Title (Only if multiple sections exist or explicit titles needed) */}
                    <h4 className="text-[clamp(9px,1.8vw,12px)] font-semibold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 pl-1 sm:pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                      {language == 'en' ? section.title : section.title2}
                    </h4>

                    {/* Links List */}
                    <ul className="space-y-0.5 sm:space-y-1">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href === '#' ? '/' : link.href}
                            className="flex items-center justify-between group/link py-1.5 sm:py-2 px-1 sm:px-2 rounded-r hover:bg-gray-50 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <ChevronRight
                                size={12}
                                className="text-gray-300 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5"
                              />
                              <span className="text-[clamp(10px,2vw,14px)] font-medium text-gray-600 group-hover/link:text-black transition-colors">
                                {language == 'en' ? link.title : link.title2}
                              </span>
                            </div>

                            {/* Hover Indicator */}
                            <ArrowUpRight
                              size={10}
                              className="opacity-0 -translate-x-2 text-[#800000] group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 sm:w-3 sm:h-3"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Department;
