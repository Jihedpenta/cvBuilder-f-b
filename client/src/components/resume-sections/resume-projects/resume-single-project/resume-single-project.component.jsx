import { Grid, Typography } from '@mui/material';
import DOMPurify from 'dompurify';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ResumeSingleProject = ({project}) => {
    const { t } = useTranslation();

    return (
        <Grid container>
            <Grid item md={3}>
                <Typography>
                    {project.date}
                </Typography>
                
            </Grid>
            <Grid item md={9}>
                <Typography sx={{
                    fontWeight: 'bold'
                }}>
                    {project.title}
                </Typography>
                <Typography sx={{
                    textTransform: 'capitalize'
                }}>
                   <i> <b>{t('company')}</b>  : {project.company}</i> 
                </Typography>
                <Typography sx={{
                    textTransform: 'capitalize'
                }}>
                   <i> <b>{t('client')}</b>  : {project.client} - {project.location}</i> 
                </Typography>
                <Typography  component="div">
                { <div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(project.description) }} /> }

                </Typography>
            </Grid>
        </Grid>
    );
};

export default ResumeSingleProject;