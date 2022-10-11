const commentHtml = document.querySelector('.comment')


    const comments = [
    {
    commentId: 1,
    commentContent: 'Hai',
    replies: [{
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [{
                    commentId: 111,
                    commentContent: 'Haai juga hai jugaa'
                },
                {
                    commentId: 112,
                    commentContent: 'Haai juga hai jugaa'
                }]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [{
                    commentId: 121,
                    commentContent: 'Haai juga hai jugaa'
                }]
            }
            ]
            },
    {
    commentId: 2,
    commentContent: 'Halooo'
    }
    ]

const arr = []
const addComments = (elem) => {
    elem.forEach((c) => {
        arr.push(c.commentContent)
        if(c.replies){
            addComments(c.replies)
        }
    })
}
addComments(comments)

let total = arr.length

commentHtml.innerHTML = `Jumlah Total Komentar ialah: ${total}`