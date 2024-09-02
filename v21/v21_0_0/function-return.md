## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,519,594|759798|
|Function returning explicitly undefined|1,588,615|794308|
|Function returning implicitly undefined|1,656,808|828405|
|Function returning string|1,651,327|825664|
|Function returning integer|1,692,972|846487|
|Function returning float|1,616,763|808382|
|Function returning functions|1,590,085|795043|
|Function returning arrow functions|1,660,198|830100|
|Function returning empty object|1,705,846|852924|
|Function returning empty array|1,686,045|843023|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:34:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1519594.6049484594,"samples":759798},{"name":"Function returning explicitly undefined","opsSec":1588615.0896348793,"samples":794308},{"name":"Function returning implicitly undefined","opsSec":1656808.8535983562,"samples":828405},{"name":"Function returning string","opsSec":1651327.0119152877,"samples":825664},{"name":"Function returning integer","opsSec":1692972.619006295,"samples":846487},{"name":"Function returning float","opsSec":1616763.968560383,"samples":808382},{"name":"Function returning functions","opsSec":1590085.4273960667,"samples":795043},{"name":"Function returning arrow functions","opsSec":1660198.548056216,"samples":830100},{"name":"Function returning empty object","opsSec":1705846.6469097536,"samples":852924},{"name":"Function returning empty array","opsSec":1686045.3094910788,"samples":843023}]}-->
