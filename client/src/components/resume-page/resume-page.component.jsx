import React, { useEffect } from 'react';
import useInitilizeRefs from '../../hooks/useInitilizeRefs';
import useResume from '../../hooks/useResume';
import { addContentSlice, redoAndAppendToNewPage } from '../../utils/resume-utils';
import { contentHeightTotal, getColor, getLogoUrl } from '../../utils/ui-utils';
import ResumeCertificationList from '../resume-sections/resume-certifications/resume-certifications-list/resume-certification-list.component';
import ResumeEducationList from '../resume-sections/resume-educations/resume-education-list/resume-education-list.component';
import ResumeExperienceList from '../resume-sections/resume-experiences/resume-experience-list/resume-experience-list.componenet';
import ResumeHeader from '../resume-sections/resume-header/resume-header.component';
import ResumeLangs from '../resume-sections/resume-languages/resume-lang.component';
import ResumeProjectsList from '../resume-sections/resume-projects/resume-projects-list/resume-projects-list.component';
import ResumeSkills from '../resume-sections/resume-skills/resume-skills.component';
import ResumeSummery from '../resume-sections/resume-summery/resume-sumery.component';
import ResumeTools from '../resume-sections/resume-tools/resume-tools.component';
import ResumeTopPage from '../resume-sections/resume-top-page/resume-top-page.component';
import ResumePageContainer from './resume-page-container/resume-page-container.component';


const ResumePage = ({ content, industry, pentaContact, index, id, anonymous }) => {
    const { containerRef, headerRef, topPageRef, summaryRef, educationRef, certifRef, workExpRef, projectRef, skillRef, toolRef, langRef } = useInitilizeRefs()
    const primaryColor = getColor(industry)
    const logoLink = getLogoUrl(industry);
    const { pagesHeight, contentToFill, setContentToFill, pagesContent, setPagesContent } = useResume()


    useEffect(() => {
        const totalContentLength = contentHeightTotal([headerRef, topPageRef, summaryRef, educationRef, certifRef, workExpRef, projectRef, skillRef, toolRef, langRef])

        if (pagesHeight[index]) {
            if (totalContentLength < pagesHeight[index] - 150) {
                if (totalContentLength > 0 && !pagesContent[index + 1]) {
                    //if there's content to add 
                    // add content slice 
                    if (Object.keys(contentToFill).length !== 0) {
                        const [pageCurrentContent, newContentToFill] = addContentSlice(pagesContent[index], contentToFill)
                        const newPagesContent = JSON.parse(JSON.stringify(pagesContent));
                        newPagesContent[index] = pageCurrentContent
                        if (JSON.stringify(pagesContent) !== JSON.stringify(newPagesContent)) {
                            setPagesContent(newPagesContent);
                        }
                        if (JSON.stringify(contentToFill) !== JSON.stringify(newContentToFill)) {
                            setContentToFill(newContentToFill);
                        }
                    }
                }
            } else {
                const [nextPageContent, newCurrentPageContent] = redoAndAppendToNewPage(pagesContent[index])
                const newPagesContent = JSON.parse(JSON.stringify(pagesContent));
                newPagesContent[index] = newCurrentPageContent
                newPagesContent.push(nextPageContent)
                setPagesContent(newPagesContent);
            }
        }

    }, [pagesContent, contentToFill, pagesHeight])



    return (

        <ResumePageContainer primaryColor={primaryColor} pentaContact={pentaContact} innerRef={containerRef} index={index} id={id}>
            {content.header && Object.keys(content.header).length>0 ? <ResumeHeader headerData={content.header} primaryColor={primaryColor} logoLink={logoLink} innerRef={headerRef} anonymous={anonymous} /> : <ResumeTopPage primaryColor={primaryColor} logoLink={logoLink} innerRef={topPageRef} />}
            {content.summary && Object.keys(content.summary).length>0 && <ResumeSummery summary={content.summary} innerRef={summaryRef} />}
            {content.educations && content.educations.data.length > 0 && <ResumeEducationList educations={content.educations} primaryColor={primaryColor} innerRef={educationRef} />}
            {content.certifications && content.certifications.data.length > 0 && <ResumeCertificationList certifications={content.certifications} primaryColor={primaryColor} innerRef={certifRef} />}
            {content.experiences && content.experiences.data.length > 0 && <ResumeExperienceList experiences={content.experiences} primaryColor={primaryColor} innerRef={workExpRef} />}
            {content.projects  && content.projects.data.length > 0 && <ResumeProjectsList projects={content.projects} primaryColor={primaryColor} innerRef={projectRef} />}
            {content.skills && content.skills.length > 0 && <ResumeSkills skills={content.skills} primaryColor={primaryColor} innerRef={skillRef} />}
            {content.tools && content.tools.length > 0 && <ResumeTools tools={content.tools} primaryColor={primaryColor} innerRef={toolRef} />}
            {content.langs && content.langs.length > 0 && <ResumeLangs langs={content.langs} primaryColor={primaryColor} innerRef={langRef} />}
        </ResumePageContainer>

    );
};

export default ResumePage;