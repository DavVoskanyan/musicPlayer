import styleClasses from './SectionTitle.module.css';

const SectionTitle = ( props ) => {

    return (
        <div className={ styleClasses.sectionTitleContainer } >

            <h2 className={ styleClasses.sectionTitle } >
                { props.sectionTitle }
            </h2>

        </div>
    )

}

export default SectionTitle;