import React from 'react'
import { Card, CardContent, CardActionArea } from '@material-ui/core'
import { Link } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const creteStyles = makeStyles({
    root: {
    },
})

const simpleCard = (props) => {

    const classes = creteStyles()

    return (
        <Card className={classes.root}>
            <Link href={props.url} target='_blank' rel='noopener' underline='none'>
              <CardActionArea>
                    <CardContent>
                        <Typography>
                            {props.title}
                        </Typography>
                    </CardContent>
               </CardActionArea>
            </Link>
        </Card>
    )
}

export default simpleCard