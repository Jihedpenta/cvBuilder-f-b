export const addContentSlice = (pagesContentData, contentToFillData) => {
    const pageCurrentContent = JSON.parse(JSON.stringify(pagesContentData));
    const contentToFill = JSON.parse(JSON.stringify(contentToFillData));

    //if content to fill contain header 
    //add header 
    //remove header from contentToFill 
    //return 
    let added = false;
    if (contentToFill.header && !added) {
        pageCurrentContent['header'] = contentToFill.header;
        delete contentToFill.header;
        added = true;

    }

    //if content to fill contain summery 
    //add summery 
    //remove summery from contentToFill 
    //return 
    if (contentToFill.summary && !added) {
        pageCurrentContent.summary = contentToFill.summary;
        delete contentToFill.summary;
        added = true

    }


    //if  pageCurrentContent or contentToFill contain education
    if (((contentToFill.educations && contentToFill.educations.length > 0) || pageCurrentContent.educations) && !added) {
        //if pageCurrentContent don't contain education 
        if (!pageCurrentContent.educations) {
            pageCurrentContent.educations = {
                firstDisplay: Object.keys(pageCurrentContent).length === 0 ? false : true,
                data: [{ ...contentToFill.educations[0] }]
            }

            contentToFill.educations.shift();
            if (contentToFill.educations.length === 0) { delete contentToFill.educations }
            added = true
        }
        //if pageCurrentContent and contentToFill both contain education
        if (((contentToFill.educations && contentToFill.educations.length > 0) && pageCurrentContent.educations) && !added) {

            //add education element in currentContent
            //delete education element from contentTofill 
            //if education in contenttofill is empty => remove it completely 
            pageCurrentContent.educations.data.push({ ...contentToFill.educations[0] })

            contentToFill.educations.shift();
            if (contentToFill.educations.length === 0) { delete contentToFill.educations }
            added = true
        }

    }

    //if  pageCurrentContent or contentToFill contain certifications
    if (((contentToFill.certifications && contentToFill.certifications.length > 0) || pageCurrentContent.certifications) && !added) {

        //if pageCurrentContent and contentToFill both contain certifications
        if ((contentToFill.certifications && contentToFill.certifications.length > 0) && pageCurrentContent.certifications) {

            pageCurrentContent.certifications.data.push(contentToFill.certifications[0])

            contentToFill.certifications.shift();

            if (contentToFill.certifications.length === 0) { delete contentToFill.certifications }
            added = true
        }
        //if pageCurrentContent don't contain education 
        if (!pageCurrentContent.certifications) {
            pageCurrentContent.certifications = {
                firstDisplay: Object.keys(pageCurrentContent).length === 0 ? false : true,
                data: [contentToFill.certifications[0]]
            }
            contentToFill.certifications.shift();
            if (contentToFill.certifications.length === 0) { delete contentToFill.certifications }
            added = true
        }
    }

    //if  pageCurrentContent or contentToFill contain experiences
    if (((contentToFill.experiences && contentToFill.experiences.length > 0) || pageCurrentContent.experiences) && !added) {

        //if pageCurrentContent and contentToFill both contain experiences
        if ((contentToFill.experiences && contentToFill.experiences.length > 0) && pageCurrentContent.experiences) {
            //add experiences element in currentContent
            //delete experiences element from contentTofill 
            //if experiences in contenttofill is empty => remove it completely 
            pageCurrentContent.experiences.data.push(contentToFill.experiences[0])
            contentToFill.experiences.shift();

            if (contentToFill.experiences.length === 0) { delete contentToFill.experiences }
            added = true
        }
        //if pageCurrentContent don't contain education 
        if (!pageCurrentContent.experiences) {
            pageCurrentContent.experiences = {
                firstDisplay: Object.keys(pageCurrentContent).length === 0 ? false : true,
                data: [contentToFill.experiences[0]]
            }
            contentToFill.experiences.shift();
            if (contentToFill.experiences.length === 0) { delete contentToFill.experiences }
            added = true
        }
    }


    //if  pageCurrentContent or contentToFill contain projects
    if (((contentToFill.projects && contentToFill.projects.length > 0)  || pageCurrentContent.projects) && !added) {

        //if pageCurrentContent and contentToFill both contain projects
        if ((contentToFill.projects && contentToFill.projects.length > 0)  && pageCurrentContent.projects) {
            //add projects element in currentContent
            //delete projects element from contentTofill 
            //if projects in contenttofill is empty => remove it completely 
            pageCurrentContent.projects.data.push(contentToFill.projects[0])
            contentToFill.projects.shift();

            if (contentToFill.projects.length === 0) { delete contentToFill.projects }
            added = true
        }
        //if pageCurrentContent don't contain education 
        if (!pageCurrentContent.projects) {
            pageCurrentContent.projects = {
                firstDisplay: Object.keys(pageCurrentContent).length === 0 ? false : true,
                data: [contentToFill.projects[0]]
            }
            contentToFill.projects.shift();
            if (contentToFill.projects.length === 0) { delete contentToFill.projects }
            added = true
        }
    }


    //if  pageCurrentContent or contentToFill contain projects
    if ((contentToFill.skills && contentToFill.skills.length > 0)  && !added) {
        pageCurrentContent.skills = contentToFill.skills
        delete contentToFill.skills
        added = true
    }
    if ((contentToFill.tools && contentToFill.tools.length > 0)  && !added) {
        pageCurrentContent.tools = contentToFill.tools
        delete contentToFill.tools
        added = true
    }
    if ((contentToFill.langs && contentToFill.langs.length > 0)  && !added) {
        pageCurrentContent.langs = contentToFill.langs
        delete contentToFill.langs
        added = true
    }
    // if(contentToFill.projects && !added){
    //     pageCurrentContent.projects = {

    //     }
    // }

    return [pageCurrentContent, contentToFill];
}

export const redoAndAppendToNewPage = (currentContent) => {
    let done = false;
    const newCurrentPageContent = JSON.parse(JSON.stringify(currentContent));
    const nextPageContent = {}
    if (currentContent.langs && !done) {
        nextPageContent.langs = currentContent.langs
        delete newCurrentPageContent.langs
        done = true
    }
    if (currentContent.tools && !done) {
        nextPageContent.tools = currentContent.tools
        delete newCurrentPageContent.tools
        done = true
    }
    if (currentContent.skills && !done) {
        nextPageContent.skills = currentContent.skills
        delete newCurrentPageContent.skills
        done = true
    }
    if (currentContent.projects && !done) {
        const projectElement = newCurrentPageContent.projects.data.pop();
        nextPageContent.projects = {
            firstDisplay: newCurrentPageContent.projects.data.length <= 0 ? true : false,
            data: [projectElement]
        }
        if (newCurrentPageContent.projects.data.length <= 0) {
            delete newCurrentPageContent.projects
        }
        done = true
    }

    if (currentContent.experiences && !done) {
        const projectElement = newCurrentPageContent.experiences.data.pop();
        nextPageContent.experiences = {
            firstDisplay: newCurrentPageContent.experiences.data.length <= 0 ? true : false,
            data: [projectElement]
        }
        if (newCurrentPageContent.experiences.data.length <= 0) {
            delete newCurrentPageContent.experiences
        }
        done = true
    }
    if (currentContent.certifications && !done) {
        const projectElement = newCurrentPageContent.certifications.data.pop();
        nextPageContent.certifications = {
            firstDisplay: newCurrentPageContent.certifications.data.length <= 0 ? true : false,
            data: [projectElement]
        }
        if (newCurrentPageContent.certifications.data.length <= 0) {
            delete newCurrentPageContent.certifications
        }
        done = true
    }

    if (currentContent.educations && !done) {
        const projectElement = newCurrentPageContent.educations.data.pop();
        nextPageContent.educations = {
            firstDisplay: newCurrentPageContent.educations.data.length <= 0 ? true : false,
            data: [projectElement]
        }
        if (newCurrentPageContent.educations.data.length <= 0) {
            delete newCurrentPageContent.educations
        }
        done = true
    }

    if (currentContent.summary && !done) {
        nextPageContent.summary = currentContent.summary
        delete newCurrentPageContent.summary
        done = true
    }
    return [nextPageContent, newCurrentPageContent]

}