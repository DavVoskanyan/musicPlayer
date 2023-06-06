import styleClasses from './SectionTitle.module.css';

const SectionTitle = (props) => {
    return (
        <div className={styleClasses.sectionTitleContainer}>
            <h2 className={styleClasses.sectionTitle}>{props.sectionTitle}</h2>
            <button className={styleClasses.moreButton}>more</button>
        </div>
    )
}

export default SectionTitle;