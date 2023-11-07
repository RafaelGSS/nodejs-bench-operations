## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,115,948|92|
|{ ...object, __proto__: null }|30,144,817|97|
|{ ...object, newProp: true }|922,130|90|
|structuredClone|265,114|98|
|JSON.parse + JSON.stringify|207,862|95|
|loop + object.keys starting with {}|1,663,315|97|
|loop + object.keys starting with { __proto__: null }|817,597|92|
|loop + object.keys starting with { randomProp: true }|617,965|89|
|object.keys + reduce(FN, {})|636,972|96|
|object.keys + reduce(FN, { __proto__: null })|900,131|96|
|object.keys + reduce(FN, { newProp: true })|646,011|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:51:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29115947.93731354,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":30144816.50405982,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":922130.1360683853,"samples":3},{"name":"structuredClone","opsSec":265113.89704170544,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":207861.5378240819,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1663315.1680686255,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":817597.3234927129,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":617964.977672961,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":636971.6656203235,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":900130.9232438377,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":646011.0062573452,"samples":7}]}-->
