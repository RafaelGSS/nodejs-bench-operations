## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,430,745|5215373|
|{ ...object, __proto__: null }|10,427,753|5213877|
|{ ...object, newProp: true }|640,616|321472|
|structuredClone|242,453|121227|
|JSON.parse + JSON.stringify|196,826|98414|
|loop + object.keys starting with {}|1,165,723|582862|
|loop + object.keys starting with { __proto__: null }|687,015|343509|
|loop + object.keys starting with { randomProp: true }|506,187|253094|
|object.keys + reduce(FN, {})|1,149,645|574823|
|object.keys + reduce(FN, { __proto__: null })|649,893|324947|
|object.keys + reduce(FN, { newProp: true })|504,599|252300|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:07:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10430745.220245466,"samples":5215373},{"name":"{ ...object, __proto__: null }","opsSec":10427753.684023304,"samples":5213877},{"name":"{ ...object, newProp: true }","opsSec":640616.4205383289,"samples":321472},{"name":"structuredClone","opsSec":242453.15300008512,"samples":121227},{"name":"JSON.parse + JSON.stringify","opsSec":196826.32896354696,"samples":98414},{"name":"loop + object.keys starting with {}","opsSec":1165723.6309999279,"samples":582862},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":687015.747039549,"samples":343509},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":506187.5992821097,"samples":253094},{"name":"object.keys + reduce(FN, {})","opsSec":1149645.5344721887,"samples":574823},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":649893.025444169,"samples":324947},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":504599.1966916997,"samples":252300}]}-->
