import React from "react"
import Title from "./Title"
import {FaAlignRight, FaAngleDoubleRight} from "react-icons/fa"
import {useStaticQuery, graphql} from 'gatsby';
import {Link} from "gatsby"


const Jobs =  () => {



    // return <h1>welcome to {id}</h1>
    return <section className="section jobs">
        {/*<Title title="experience"/>*/}
        {/*<div className="jobs-center">*/}
        {/*    <div className="btn-container">*/}
        {/*        {jobs.map((item, index) => {*/}
        {/*            return (<button*/}
        {/*                onClick={() => setValue(index)}*/}
        {/*                key={item.strapiId}*/}
        {/*                className={`job-btn ${index === value && "active-btn"}`}>{item.company}</button>)*/}
        {/*        })}*/}
        {/*    </div>*/}
        {/*    <article className="job-info">*/}
        {/*        <h3>{position}</h3>*/}
        {/*        <h4>{company}</h4>*/}
        {/*        <p className="job-date">{date}</p>*/}
        {/*        {desc.map((item) => {*/}
        {/*            return <div key={item.id} className="job-desc">*/}
        {/*                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>*/}
        {/*                <p>{item.name}</p>*/}
        {/*            </div>*/}
        {/*        })}*/}
        {/*    </article>*/}
        {/*</div>*/}
        {/*<Link to="/about" className="btn center-btn">*/}
        {/*    more info*/}
        {/*</Link>*/}
    </section>
}

export default Jobs
