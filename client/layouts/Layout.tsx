import React, { useEffect } from 'react';

import SampleCode from '../components/SampleCode';
import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ margin: '0 auto 64px auto', maxWidth: '1024px' }}>
            {children}
            <Footer />
            <div>
                <SampleCode
                    lang='javascript'
                    code={`
this
    .madeWith([react,typescript])
    .then((r) => lint(r))                           /* tslint */
    .then((r) => lazyLoad(r))                       /* @loadable/component */
    .then((r) => optimizeAndBundle(r))              /* webpack */
    .then((r) => exportHtml(r))                     /* react-snap */
    .then((r) => deploy(r))                         /* Netlify */
    .then((r) => {
        expect(r).is(scalableCode);
        expect(r).is(superFastWebsite);
        expect(r).is(seoFriendly);
    })
    .finally(() => {/* Give me 1 star */}) 🎉       /* https://github.com/phuoc-ng/csslayout */
`}
                />
            </div>
        </div>
    );
};

export default Layout;