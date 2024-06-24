## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,441,113|5220557|
|{ ...object, __proto__: null }|2,228,206|1114104|
|{ ...object, newProp: true }|10,231,858|5115930|
|structuredClone|322,742|161372|
|JSON.parse + JSON.stringify|290,809|145405|
|loop + object.keys starting with {}|1,458,291|729146|
|loop + object.keys starting with { __proto__: null }|890,614|445308|
|loop + object.keys starting with { randomProp: true }|670,755|335378|
|object.keys + reduce(FN, {})|1,551,797|775899|
|object.keys + reduce(FN, { __proto__: null })|867,279|433640|
|object.keys + reduce(FN, { newProp: true })|684,316|342159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:02:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10441113.436183002,"samples":5220557},{"name":"{ ...object, __proto__: null }","opsSec":2228206.5739462683,"samples":1114104},{"name":"{ ...object, newProp: true }","opsSec":10231858.894955682,"samples":5115930},{"name":"structuredClone","opsSec":322742.8355439741,"samples":161372},{"name":"JSON.parse + JSON.stringify","opsSec":290809.15083765966,"samples":145405},{"name":"loop + object.keys starting with {}","opsSec":1458291.4050168416,"samples":729146},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":890614.8600130501,"samples":445308},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":670755.3855887373,"samples":335378},{"name":"object.keys + reduce(FN, {})","opsSec":1551797.3016905375,"samples":775899},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":867279.9670429683,"samples":433640},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":684316.7778098261,"samples":342159}]}-->
