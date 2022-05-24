var config= require('./dbconfig');
const sql = require('mssql');



async function getPosts(text){
    queryStr = "With t10posts as (SELECT Top 120 t1.Title, t1.OwnerUserId,t1.PostTypeId, SUBSTRING(t1.Body,1,160) as Body,t1.AnswerCount, t1.score from Posts t1 where Title LIKE '%" + text + "%'),usersquestions as (SELECT  DISTINCT t1.OwnerUserId,t3.DisplayName,t3.Reputation,t4.name FROM t10posts t1 INNER JOIN PostTypes t2 on t1.PostTypeId = t2.Id INNER JOIN Users t3 On t1.OwnerUserId = t3.Id INNER JOIN Badges t4 ON t1.OwnerUserId = t4.UserId WHERE t2.Type = 'Question' ), badge_collector as ( SELECT t1.OwnerUserId, t1.DisplayName,t1.Reputation, STRING_AGG(CONVERT(NVARCHAR(max),t1.Name),',') as badges FROM usersquestions t1 GROUP BY t1.OwnerUserId, t1.DisplayName,t1.Reputation)SELECT t1.Title, t1.Body,t1.AnswerCount,t2.DisplayName,t2.Reputation,t2.badges,t1.score FROM t10posts t1 LEFT JOIN badge_collector t2 ON t1.OwnerUserId = t2.OwnerUserId";
    console.log(queryStr);
    try{
        let pool = await sql.connect(config);
        let products= await pool.request().query(queryStr);
        console.log(products.recordsets);
        return products.recordsets;
    }
    catch(error){
        console.log(error);
    }
}
module.exports={
    getPosts: getPosts,
    sql: sql
}