## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,650,533|4825267|
|{ ...object, __proto__: null }|9,526,117|4763059|
|{ ...object, newProp: true }|737,238|369275|
|structuredClone|278,337|139169|
|JSON.parse + JSON.stringify|188,991|94496|
|loop + object.keys starting with {}|1,287,276|643639|
|loop + object.keys starting with { __proto__: null }|765,750|382876|
|loop + object.keys starting with { randomProp: true }|515,145|257573|
|object.keys + reduce(FN, {})|1,269,840|634921|
|object.keys + reduce(FN, { __proto__: null })|674,023|337012|
|object.keys + reduce(FN, { newProp: true })|510,748|255375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:49:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9650533.05424049,"samples":4825267},{"name":"{ ...object, __proto__: null }","opsSec":9526117.809444172,"samples":4763059},{"name":"{ ...object, newProp: true }","opsSec":737238.2835278598,"samples":369275},{"name":"structuredClone","opsSec":278337.6492942528,"samples":139169},{"name":"JSON.parse + JSON.stringify","opsSec":188991.28712485326,"samples":94496},{"name":"loop + object.keys starting with {}","opsSec":1287276.8980890287,"samples":643639},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":765750.5879551203,"samples":382876},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":515145.3910972969,"samples":257573},{"name":"object.keys + reduce(FN, {})","opsSec":1269840.6082577333,"samples":634921},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":674023.032102917,"samples":337012},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":510748.8589868857,"samples":255375}]}-->
