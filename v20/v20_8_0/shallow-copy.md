## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|17,084,711|89|
|{ ...object, __proto__: null }|17,591,675|87|
|{ ...object, newProp: true }|477,097|82|
|structuredClone|156,017|92|
|JSON.parse + JSON.stringify|126,186|92|
|loop + object.keys starting with {}|306,683|88|
|loop + object.keys starting with { __proto__: null }|413,839|91|
|loop + object.keys starting with { randomProp: true }|317,844|93|
|object.keys + reduce(FN, {})|309,016|92|
|object.keys + reduce(FN, { __proto__: null })|410,510|90|
|object.keys + reduce(FN, { newProp: true })|304,046|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":17084710.82673127,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":17591675.028329942,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":477096.5464209532,"samples":3},{"name":"structuredClone","opsSec":156016.87119782146,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":126186.373218388,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":306683.3919235672,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":413838.9885163343,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":317844.01549695374,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":309016.1192759498,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":410510.05766880186,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":304046.2473726509,"samples":4}]}-->
