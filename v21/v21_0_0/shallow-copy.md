## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|33,892,080|92|
|{ ...object, __proto__: null }|2,777,450|97|
|{ ...object, newProp: true }|30,881,147|96|
|structuredClone|285,036|93|
|JSON.parse + JSON.stringify|258,949|98|
|loop + object.keys starting with {}|1,660,519|97|
|loop + object.keys starting with { __proto__: null }|874,272|97|
|loop + object.keys starting with { randomProp: true }|702,198|95|
|object.keys + reduce(FN, {})|674,972|96|
|object.keys + reduce(FN, { __proto__: null })|873,438|93|
|object.keys + reduce(FN, { newProp: true })|708,889|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:30:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":33892079.83869359,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":2777449.5253428747,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":30881147.411176924,"samples":8},{"name":"structuredClone","opsSec":285035.5242830546,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":258948.6397299116,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1660519.2161455143,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":874271.7350459791,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":702198.0155159883,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":674971.5048028157,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":873438.1149492433,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":708888.6706726254,"samples":5}]}-->
