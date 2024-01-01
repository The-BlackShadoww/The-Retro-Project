// ! With Redux it works
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button";
import { DescriptiveText } from "../UI/Texts/Text";
import HeroBanner from "./HeroBanner";
import { connect } from "react-redux";
import { fetchData } from "../../lib/Redux/ReduxToolkit/heroSlice";

const mapStateToProps = (state) => {
    return {
        hero_section: state.hero,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData()),
    };
};

const Hero = ({ fetchData, hero_section }) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const content = hero_section.data.map((d, i) => (
        <section key={i}>
            <Link to="">
                <div>
                    <HeroBanner img_lg={d.img_lg} img_sm={d.img_sm} />
                    <div className="mt-3 tablet:text-center">
                        <h1 className="tablet:text-6xl text-3xl tablet:mt-12">
                            {d.title}
                        </h1>
                        <div className="mt-7">
                            <DescriptiveText>{d.des_text}</DescriptiveText>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="w-full flex mt-8 tablet:justify-center">
                <Button path={"/"}>Shop </Button>
            </div>
        </section>
    ));

    return (
        <>
            {hero_section.hasError ? <p>failed to fetch data</p> : null}
            {content}
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);

//! Without Redux Toolkit
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../UI/Buttons/Button";
// import { DescriptiveText } from "../UI/Texts/Text";
// import HeroBanner from "./HeroBanner";
// import { connect } from "react-redux";
// import { fetchHeroData } from "../../redux/Actions";

// const mapStateToProps = (state) => {
//     return {
//         hero_section: state.hero_section,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchHeroData: () => dispatch(fetchHeroData()),
//     };
// };

// const Hero = ({ fetchHeroData, hero_section }) => {
//     useEffect(() => {
//         fetchHeroData();
//     }, [fetchHeroData]);

//     const content = hero_section.data.map((d, i) => (
//         <section key={i}>
//             <Link to="">
//                 <div>
//                     <HeroBanner img_lg={d.img_lg} img_sm={d.img_sm} />
//                     <div className="mt-3 tablet:text-center">
//                         <h1 className="tablet:text-6xl text-3xl tablet:mt-12">
//                             {d.title}
//                         </h1>
//                         <div className="mt-7">
//                             <DescriptiveText>{d.des_text}</DescriptiveText>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//             <div className="w-full flex mt-8 tablet:justify-center">
//                 <Button path={"/"}>Shop </Button>
//             </div>
//         </section>
//     ));

//     return content;
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Hero);
