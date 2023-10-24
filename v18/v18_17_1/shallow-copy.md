## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,317,229|90|
|{ ...object, __proto__: null }|16,272,542|92|
|{ ...object, newProp: true }|483,783|75|
|structuredClone|178,065|86|
|JSON.parse + JSON.stringify|143,605|87|
|loop + object.keys starting with {}|679,654|88|
|loop + object.keys starting with { __proto__: null }|440,322|90|
|loop + object.keys starting with { randomProp: true }|333,295|91|
|object.keys + reduce(FN, {})|686,202|90|
|object.keys + reduce(FN, { __proto__: null })|456,442|91|
|object.keys + reduce(FN, { newProp: true })|333,003|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":15317229.169481328,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":16272541.552330904,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":483782.5914604869,"samples":3},{"name":"structuredClone","opsSec":178064.95836533443,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":143604.70450931124,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":679653.676194672,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":440322.0039827069,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":333295.2829237422,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":686201.9347438893,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":456441.67283090134,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":333003.35183010285,"samples":6}]}-->
