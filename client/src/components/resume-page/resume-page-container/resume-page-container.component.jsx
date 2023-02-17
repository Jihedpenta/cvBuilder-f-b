import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import useResume from '../../../hooks/useResume';
import ResumeFooter from '../../resume-sections/resume-footer/resume-footer.component';
import './resume-page.style-container.scss';

const ResumePageContainer = ({ children, primaryColor, pentaContact, innerRef, index }) => {
    const {pagesHeight, setPagesHeight} = useResume()

    // const ref = useRef(null);
    const [height, setHeight] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);
    useLayoutEffect(() => {
        setHeight(innerRef.current.offsetWidth * 1.32);
        setFooterHeight(innerRef.current.offsetWidth * 0.09);
        function handleResize() {
            setHeight(innerRef.current.offsetWidth * 1.32);
            setFooterHeight(innerRef.current.offsetWidth * 0.09);
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    // const some_var = []
    useEffect(()=>{
        if (innerRef.current.offsetHeight>20){
            // console.log(typeof(some_var));
            let newPagesHeights = []
            if(index===0){
                newPagesHeights = [innerRef.current.offsetHeight]
            }else {
                newPagesHeights = [...pagesHeight]
                newPagesHeights.push(innerRef.current.offsetHeight)
            }
            // const newPagesHeights = {...pagesHeight}
            // newPagesHeights[index]= innerRef.current.offsetHeight
            // pagesHeights=innerRef.current.offsetHeight
            // // pagesHeightArray.push(innerRef.current.offsetHeight)
            // console.log(pagesHeights);

            // pagesHeightArray[index] = innerRef.current.offsetHeight
            setPagesHeight(newPagesHeights);
        }
    },[height])




    useEffect(()=>{
        // console.log('current page height from container', pagesHeight)
    },[pagesHeight])



    return (
        <Grid item
            component={Paper}
            elevation={6}
            className="single-resume-page"
            square
            ref={innerRef}
        >
            <Box
                className='resume-page'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: height,
                    padding: '10px 80px'
                }}
            >
                <h2 className='resume-page-background' style={{ color: primaryColor }}>Pentabell</h2>
                {children}
            </Box>
            <ResumeFooter primaryColor={primaryColor} pentaContact={pentaContact} footerHeight={footerHeight} />
        </Grid>
    );
};

export default ResumePageContainer;