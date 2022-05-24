
With t10posts as (
SELECT  t1.Title,
		t1.OwnerUserId,
		t1.PostTypeId,
		SUBSTRING(t1.Body,1,160) as Body,
		t1.AnswerCount,
		t1.score
from Posts t1
/*where Title LIKE '%" + text + "%'"*/
ORDER BY CreationDate DESC
OFFSET 11 rows
fetch next 10 rows only
)

,usersquestions as (
	SELECT  DISTINCT t1.OwnerUserId,
	t3.DisplayName,
	t3.Reputation,
	t4.name
	FROM t10posts t1
	INNER JOIN PostTypes t2 on t1.PostTypeId = t2.Id
	INNER JOIN Users t3 On t1.OwnerUserId = t3.Id
	INNER JOIN Badges t4 ON t1.OwnerUserId = t4.UserId
	WHERE t2.Type = 'Question' 
)

, badge_collector as ( 
SELECT t1.OwnerUserId, 
t1.DisplayName,
t1.Reputation, 
STRING_AGG(CONVERT(NVARCHAR(max),t1.Name),',') as badges
FROM usersquestions t1
GROUP BY t1.OwnerUserId, 
t1.DisplayName,
t1.Reputation
)

SELECT t1.Title,
		t1.Body,
		t1.AnswerCount,
		t2.Reputation,
		t2.DisplayName,
		t2.badges,
		t1.score
FROM t10posts t1
LEFT JOIN badge_collector t2 ON t1.OwnerUserId = t2.OwnerUserId
