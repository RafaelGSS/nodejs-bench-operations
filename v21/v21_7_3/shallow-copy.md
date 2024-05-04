## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|34,110,430|97|
|{ ...object, __proto__: null }|2,751,069|99|
|{ ...object, newProp: true }|30,984,985|98|
|structuredClone|299,100|95|
|JSON.parse + JSON.stringify|260,305|98|
|loop + object.keys starting with {}|1,654,335|97|
|loop + object.keys starting with { __proto__: null }|860,821|91|
|loop + object.keys starting with { randomProp: true }|690,937|95|
|object.keys + reduce(FN, {})|669,400|96|
|object.keys + reduce(FN, { __proto__: null })|873,117|94|
|object.keys + reduce(FN, { newProp: true })|693,642|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:34:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":34110429.71308366,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2751069.1117209615,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":30984985.308069456,"samples":6},{"name":"structuredClone","opsSec":299099.8476826542,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":260305.37453265602,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1654335.0635383169,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":860820.8395346226,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":690936.7690643268,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":669399.8132645192,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":873117.1291549926,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":693641.8415198869,"samples":5}]}-->
