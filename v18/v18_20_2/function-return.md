## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,532,370|766186|
|Function returning explicitly undefined|1,455,669|727835|
|Function returning implicitly undefined|1,481,147|740574|
|Function returning string|1,466,044|733023|
|Function returning integer|1,482,180|741091|
|Function returning float|1,453,744|726873|
|Function returning functions|1,420,435|710218|
|Function returning arrow functions|1,454,915|727458|
|Function returning empty object|1,445,977|722989|
|Function returning empty array|1,478,348|739175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1532370.3442539214,"samples":766186},{"name":"Function returning explicitly undefined","opsSec":1455669.8702000305,"samples":727835},{"name":"Function returning implicitly undefined","opsSec":1481147.7535130663,"samples":740574},{"name":"Function returning string","opsSec":1466044.0579994235,"samples":733023},{"name":"Function returning integer","opsSec":1482180.2005926177,"samples":741091},{"name":"Function returning float","opsSec":1453744.2905705355,"samples":726873},{"name":"Function returning functions","opsSec":1420435.304396125,"samples":710218},{"name":"Function returning arrow functions","opsSec":1454915.9389492974,"samples":727458},{"name":"Function returning empty object","opsSec":1445977.7324755858,"samples":722989},{"name":"Function returning empty array","opsSec":1478348.4315274905,"samples":739175}]}-->
