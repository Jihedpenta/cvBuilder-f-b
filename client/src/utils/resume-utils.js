export const addContentSlice = (pagesContentData,contentToFillData)=>{
    const pageCurrentContent = JSON.parse(JSON.stringify(pagesContentData));
    const contentToFill = JSON.parse(JSON.stringify(contentToFillData));
    //if content to fill contain header 
        //add header 
        //remove header from contentToFill 
        //return 
    let added = false;
    if(contentToFill.header&& !added){
        // console.log('content to fill contain header');
        pageCurrentContent['header'] = contentToFill.header;
        delete contentToFill.header;
        added = true;

    }
    //if content to fill contain summery 
        //add summery 
        //remove summery from contentToFill 
        //return 
    if(contentToFill.summary && !added){
        // console.log('content to fill contain summary');
        pageCurrentContent.summary = contentToFill.summary;
        delete contentToFill.summary;
        added = true

    }


    //if  pageCurrentContent or contentToFill contain education
    if ((contentToFill.educations || pageCurrentContent.educations) && !added){
        //if pageCurrentContent don't contain education 
        if (!pageCurrentContent.educations){
            // console.log('add first item');
            // console.log('before adding : ',pageCurrentContent.educations);

            // console.log(contentToFill.educations);
            pageCurrentContent.educations = {
                firstDisplay : Object.keys(pageCurrentContent).length === 0 ? false : true,
                data : [{...contentToFill.educations[0]}]
            }
            // console.log('after adding : ',pageCurrentContent.educations);

            contentToFill.educations.shift();
            if (contentToFill.educations.length === 0) {delete contentToFill.educations}
            added = true
        }
        //if pageCurrentContent and contentToFill both contain education
        if ((contentToFill.educations && pageCurrentContent.educations) && !added){
            // console.log('add n+1 item');
            // console.log('before adding n+1 : ',pageCurrentContent.educations);

            //add education element in currentContent
            //delete education element from contentTofill 
            //if education in contenttofill is empty => remove it completely 
            pageCurrentContent.educations.data.push({...contentToFill.educations[0]})
            // console.log('after adding  n+1: ',pageCurrentContent.educations);

            // console.log(pageCurrentContent.educations.data);
            contentToFill.educations.shift();
            if (contentToFill.educations.length === 0) {delete contentToFill.educations}
            added = true
        }
        
    }

        //if  pageCurrentContent or contentToFill contain certifications
        if ((contentToFill.certifications || pageCurrentContent.certifications) && !added){

            //if pageCurrentContent and contentToFill both contain certifications
            if (contentToFill.certifications && pageCurrentContent.certifications){
                // console.log('add next certifs');
                //add certifications element in currentContent
                //delete certifications element from contentTofill 
                //if certifications in contenttofill is empty => remove it completely 
                // console.log('before push ',pageCurrentContent.certifications.data);
                pageCurrentContent.certifications.data.push(contentToFill.certifications[0])
                // console.log('after push ',pageCurrentContent.certifications.data);

                // console.log(pageCurrentContent.certifications.data);
                // console.log('before shift ',contentToFill.certifications);
                contentToFill.certifications.shift();
                // console.log('after shift ',contentToFill.certifications);

                if (contentToFill.certifications.length === 0) {delete contentToFill.certifications}
                added = true
            }
            //if pageCurrentContent don't contain education 
            if (!pageCurrentContent.certifications){
                // console.log(contentToFill.certifications);
                pageCurrentContent.certifications = {
                    firstDisplay : Object.keys(pageCurrentContent).length === 0 ? false : true,
                    data : [contentToFill.certifications[0]]
                }
                contentToFill.certifications.shift();
                if (contentToFill.certifications.length === 0) {delete contentToFill.certifications}
                added = true
            }
        }

        //if  pageCurrentContent or contentToFill contain experiences
        if ((contentToFill.experiences || pageCurrentContent.experiences) && !added){

            //if pageCurrentContent and contentToFill both contain experiences
            if (contentToFill.experiences && pageCurrentContent.experiences){
                // console.log('add next certifs');
                //add experiences element in currentContent
                //delete experiences element from contentTofill 
                //if experiences in contenttofill is empty => remove it completely 
                // console.log('before push ',pageCurrentContent.experiences.data);
                pageCurrentContent.experiences.data.push(contentToFill.experiences[0])
                // console.log('after push ',pageCurrentContent.experiences.data);

                // console.log(pageCurrentContent.experiences.data);
                // console.log('before shift ',contentToFill.experiences);
                contentToFill.experiences.shift();
                // console.log('after shift ',contentToFill.experiences);

                if (contentToFill.experiences.length === 0) {delete contentToFill.experiences}
                added = true
            }
            //if pageCurrentContent don't contain education 
            if (!pageCurrentContent.experiences){
                // console.log(contentToFill.experiences);
                pageCurrentContent.experiences = {
                    firstDisplay : Object.keys(pageCurrentContent).length === 0 ? false : true,
                    data : [contentToFill.experiences[0]]
                }
                contentToFill.experiences.shift();
                if (contentToFill.experiences.length === 0) {delete contentToFill.experiences}
                added = true
            }
        }


                //if  pageCurrentContent or contentToFill contain projects
                if ((contentToFill.projects || pageCurrentContent.projects) && !added){

                    //if pageCurrentContent and contentToFill both contain projects
                    if (contentToFill.projects && pageCurrentContent.projects){
                        // console.log('add next certifs');
                        //add projects element in currentContent
                        //delete projects element from contentTofill 
                        //if projects in contenttofill is empty => remove it completely 
                        // console.log('before push ',pageCurrentContent.projects.data);
                        pageCurrentContent.projects.data.push(contentToFill.projects[0])
                        // console.log('after push ',pageCurrentContent.projects.data);
        
                        // console.log(pageCurrentContent.projects.data);
                        // console.log('before shift ',contentToFill.projects);
                        contentToFill.projects.shift();
                        // console.log('after shift ',contentToFill.projects);
        
                        if (contentToFill.projects.length === 0) {delete contentToFill.projects}
                        added = true
                    }
                    //if pageCurrentContent don't contain education 
                    if (!pageCurrentContent.projects){
                        // console.log(contentToFill.projects);
                        pageCurrentContent.projects = {
                            firstDisplay : Object.keys(pageCurrentContent).length === 0 ? false : true,
                            data : [contentToFill.projects[0]]
                        }
                        contentToFill.projects.shift();
                        if (contentToFill.projects.length === 0) {delete contentToFill.projects}
                        added = true
                    }
                }


                //if  pageCurrentContent or contentToFill contain projects
                if (contentToFill.skills && !added){
                    pageCurrentContent.skills = contentToFill.skills
                    delete contentToFill.skills
                    added = true
                }
                if (contentToFill.tools && !added){
                    pageCurrentContent.tools = contentToFill.tools
                    delete contentToFill.tools
                    added = true
                }                
                if (contentToFill.langs && !added){
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

export const redoAndAppendToNewPage = (currentContent)=>{
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
            firstDisplay : newCurrentPageContent.projects.data.length <= 0 ? true: false ,
            data : [projectElement]
        }
        if (newCurrentPageContent.projects.data.length <= 0){
            delete newCurrentPageContent.projects
        }
        done = true
    }

    if (currentContent.experiences && !done) {
        const projectElement = newCurrentPageContent.experiences.data.pop();
        nextPageContent.experiences = {
            firstDisplay : newCurrentPageContent.experiences.data.length <= 0 ? true: false ,
            data : [projectElement]
        }
        if (newCurrentPageContent.experiences.data.length <= 0){
            delete newCurrentPageContent.experiences
        }
        done = true
    }
    if (currentContent.certifications && !done) {
        const projectElement = newCurrentPageContent.certifications.data.pop();
        nextPageContent.certifications = {
            firstDisplay : newCurrentPageContent.certifications.data.length <= 0 ? true: false ,
            data : [projectElement]
        }
        if (newCurrentPageContent.certifications.data.length <= 0){
            delete newCurrentPageContent.certifications
        }
        done = true
    }

    if (currentContent.educations && !done) {
        const projectElement = newCurrentPageContent.educations.data.pop();
        nextPageContent.educations = {
            firstDisplay : newCurrentPageContent.educations.data.length <= 0 ? true: false ,            
            data : [projectElement]
        }
        if (newCurrentPageContent.educations.data.length <= 0){
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