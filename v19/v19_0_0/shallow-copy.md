## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,505,940|86|
|{ ...object, __proto__: null }|10,588,224|90|
|{ ...object, newProp: true }|423,751|78|
|structuredClone|148,958|89|
|JSON.parse + JSON.stringify|119,380|84|
|loop + object.keys starting with {}|738,609|88|
|loop + object.keys starting with { __proto__: null }|386,858|90|
|loop + object.keys starting with { randomProp: true }|293,368|81|
|object.keys + reduce(FN, {})|304,395|87|
|object.keys + reduce(FN, { __proto__: null })|426,468|85|
|object.keys + reduce(FN, { newProp: true })|315,435|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{ ...object }","opsSec":10505939.841444895,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":10588223.957776774,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":423751.1737426075,"samples":4},{"name":"structuredClone","opsSec":148958.05815637813,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":119380.12287472244,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":738608.5976181634,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":386858.3995466017,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":293368.21843791666,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":304394.889818032,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":426467.75979129423,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":315435.1516427457,"samples":6}]}-->
