import React from 'react'

export const Showcomment = (props) => {
    return (
        <div className='comment-body'>
            <p className='comment-text'>{props.comment.body}</p>
            <span className='comment-footer'>{props.comment.email}</span>
            <button className='button-cancel' type='button' onClick={() => props.hideCommentHandler(props.comment)}>
                &uarr;
                </button>
        </div>
    )
}