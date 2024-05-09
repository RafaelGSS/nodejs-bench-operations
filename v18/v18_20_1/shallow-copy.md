## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,497,653|5248827|
|{ ...object, __proto__: null }|10,555,593|5277797|
|{ ...object, newProp: true }|635,080|318180|
|structuredClone|271,971|135986|
|JSON.parse + JSON.stringify|187,131|93566|
|loop + object.keys starting with {}|1,195,951|597976|
|loop + object.keys starting with { __proto__: null }|743,385|371693|
|loop + object.keys starting with { randomProp: true }|558,378|279190|
|object.keys + reduce(FN, {})|1,220,057|610029|
|object.keys + reduce(FN, { __proto__: null })|749,561|374781|
|object.keys + reduce(FN, { newProp: true })|559,327|279664|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:23:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10497653.544483913,"samples":5248827},{"name":"{ ...object, __proto__: null }","opsSec":10555593.959733604,"samples":5277797},{"name":"{ ...object, newProp: true }","opsSec":635080.4265864503,"samples":318180},{"name":"structuredClone","opsSec":271971.5815027745,"samples":135986},{"name":"JSON.parse + JSON.stringify","opsSec":187131.19656310376,"samples":93566},{"name":"loop + object.keys starting with {}","opsSec":1195951.9840323185,"samples":597976},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":743385.6908987416,"samples":371693},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":558378.1018650589,"samples":279190},{"name":"object.keys + reduce(FN, {})","opsSec":1220057.9098258133,"samples":610029},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":749561.0775026602,"samples":374781},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":559327.1780059993,"samples":279664}]}-->
