## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,977,852|94|
|{ ...object, __proto__: null }|15,118,587|97|
|{ ...object, newProp: true }|496,016|78|
|structuredClone|175,870|97|
|JSON.parse + JSON.stringify|145,264|93|
|loop + object.keys starting with {}|313,024|95|
|loop + object.keys starting with { __proto__: null }|417,173|94|
|loop + object.keys starting with { randomProp: true }|324,377|93|
|object.keys + reduce(FN, {})|313,574|97|
|object.keys + reduce(FN, { __proto__: null })|414,595|97|
|object.keys + reduce(FN, { newProp: true })|326,604|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":14977851.631632948,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":15118586.596375715,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":496016.46807451546,"samples":3},{"name":"structuredClone","opsSec":175870.43997343665,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":145263.79833051283,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":313024.35101550573,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":417172.93356828607,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":324376.7921982533,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":313574.22811528685,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":414594.84172135446,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":326604.4472526295,"samples":5}]}-->
