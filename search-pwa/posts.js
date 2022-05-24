class Posts{
    constructor(Id
        ,AcceptedAnswerId
        ,AnswerCount
        ,Body
        ,ClosedDate
        ,CommentCount
        ,CommunityOwnedDate
        ,CreationDate
        ,FavoriteCount
        ,LastActivityDate
        ,LastEditDate
        ,LastEditorDisplayName
        ,LastEditorUserId
        ,OwnerUserId
        ,ParentId
        ,PostTypeId
        ,Score
        ,Tags
        ,Title
        ,ViewCount){
            this.Id= Id;
            this.AcceptedAnswerId= AcceptedAnswerId;
            this.AnswerCount= AnswerCount;
            this.Body= Body;
            this.ClosedDate= ClosedDate;
            this.CommentCount= CommentCount;
            this.CommunityOwnedDate=CommunityOwnedDate;
            this.CreationDate=CreationDate;
            this.FavoriteCount=FavoriteCount;
            this.LastActivityDate=LastActivityDate;
            this.LastEditDate=LastEditDate;
            this.LastEditorDisplayName=LastEditorDisplayName;
            this.LastEditorUserId=LastEditorUserId;
            this.OwnerUserId=OwnerUserId;
            this.ParentId=ParentId;
            this.PostTypeId=PostTypeId;
            this.Score=Score;
            this.Tags=Tags;
            this.Title=Title;
            this.ViewCount=ViewCount;

        }

}
module.exports= Posts;