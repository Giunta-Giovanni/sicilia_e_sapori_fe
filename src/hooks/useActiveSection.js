import { useEffect, useState } from 'react';

export function useScrollSpy(sections, offset = 100) {
    // dinamic section in scroll state
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            // save dinamic scroll positions adding also custom offset
            const scrollPosition = window.scrollY + offset;

            // save temporary current
            let current = '';

            // loop through navCategories from last to first
            for (let i = sections.length - 1; i >= 0; i--) {
                const category = sections[i];
                const ref = category.ref;
                const key = category.key;

                // skip if ref is missing or not yet attached
                if (!ref?.current) continue;

                // get top offset of the section
                const offSetTop = ref.current.offsetTop;

                if (scrollPosition >= offSetTop) {
                    current = key;
                    break;
                }
            }

            setCurrentSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, offset]);

    return currentSection;
}