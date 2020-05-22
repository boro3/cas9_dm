import React from 'react'
import { Showcomment } from './Showcomment'

export const Comment = (props) => {
    return (
        <div id='comment-box'>
            {props.comments.slice(0, 51).map(comment => {
                return (
                    <div className='comment' key={comment.id}  >
                        <div id='comment-line' onClick={() => props.showCommentHandler(comment)} >{comment.name}</div>
                        {props.selectedComments.indexOf(comment) !== -1
                            ?
                            <Showcomment comment={comment} hideCommentHandler={props.hideCommentHandler} />
                            :
                            null
                        }
                    </div>
                )
            })}
        </div>
    )
}