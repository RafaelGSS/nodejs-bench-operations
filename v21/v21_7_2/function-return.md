## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,642,615|821308|
|Function returning explicitly undefined|1,632,500|816251|
|Function returning implicitly undefined|1,667,447|833724|
|Function returning string|1,610,377|805189|
|Function returning integer|1,659,802|829902|
|Function returning float|1,645,506|822754|
|Function returning functions|1,616,727|808364|
|Function returning arrow functions|1,609,904|804953|
|Function returning empty object|1,628,695|814348|
|Function returning empty array|1,630,609|815305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1642615.7700335912,"samples":821308},{"name":"Function returning explicitly undefined","opsSec":1632500.4785103735,"samples":816251},{"name":"Function returning implicitly undefined","opsSec":1667447.5998129079,"samples":833724},{"name":"Function returning string","opsSec":1610377.2076938674,"samples":805189},{"name":"Function returning integer","opsSec":1659802.579210691,"samples":829902},{"name":"Function returning float","opsSec":1645506.0813394573,"samples":822754},{"name":"Function returning functions","opsSec":1616727.760724972,"samples":808364},{"name":"Function returning arrow functions","opsSec":1609904.5607446567,"samples":804953},{"name":"Function returning empty object","opsSec":1628695.24102558,"samples":814348},{"name":"Function returning empty array","opsSec":1630609.6575731905,"samples":815305}]}-->
