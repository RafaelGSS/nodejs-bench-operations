## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,652,961|11828800|
|{ ...object, __proto__: null }|2,431,259|1215796|
|{ ...object, newProp: true }|20,481,963|10240984|
|structuredClone|297,201|148601|
|JSON.parse + JSON.stringify|300,489|150245|
|loop + object.keys starting with {}|1,630,527|815308|
|loop + object.keys starting with { __proto__: null }|869,476|434770|
|loop + object.keys starting with { randomProp: true }|631,689|315928|
|object.keys + reduce(FN, {})|1,718,498|859385|
|object.keys + reduce(FN, { __proto__: null })|913,648|456825|
|object.keys + reduce(FN, { newProp: true })|654,011|327028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:40:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":23652961.98529615,"samples":11828800},{"name":"{ ...object, __proto__: null }","opsSec":2431259.7683526548,"samples":1215796},{"name":"{ ...object, newProp: true }","opsSec":20481963.78071546,"samples":10240984},{"name":"structuredClone","opsSec":297201.2926609235,"samples":148601},{"name":"JSON.parse + JSON.stringify","opsSec":300489.1910830976,"samples":150245},{"name":"loop + object.keys starting with {}","opsSec":1630527.090618803,"samples":815308},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":869476.1282836163,"samples":434770},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":631689.8807219273,"samples":315928},{"name":"object.keys + reduce(FN, {})","opsSec":1718498.549406133,"samples":859385},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":913648.6715548316,"samples":456825},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":654011.121756825,"samples":327028}]}-->
