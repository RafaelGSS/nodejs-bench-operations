## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,696,738|4848370|
|{ ...object, __proto__: null }|2,080,951|1040476|
|{ ...object, newProp: true }|9,522,061|4761031|
|structuredClone|286,424|143213|
|JSON.parse + JSON.stringify|270,497|135249|
|loop + object.keys starting with {}|1,407,148|703575|
|loop + object.keys starting with { __proto__: null }|803,021|401511|
|loop + object.keys starting with { randomProp: true }|550,297|275149|
|object.keys + reduce(FN, {})|1,399,920|699961|
|object.keys + reduce(FN, { __proto__: null })|759,760|379881|
|object.keys + reduce(FN, { newProp: true })|565,037|282519|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:55:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9696738.79772431,"samples":4848370},{"name":"{ ...object, __proto__: null }","opsSec":2080951.388192272,"samples":1040476},{"name":"{ ...object, newProp: true }","opsSec":9522061.428672796,"samples":4761031},{"name":"structuredClone","opsSec":286424.94595675485,"samples":143213},{"name":"JSON.parse + JSON.stringify","opsSec":270497.36974110804,"samples":135249},{"name":"loop + object.keys starting with {}","opsSec":1407148.632247739,"samples":703575},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":803021.9004241289,"samples":401511},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":550297.1679516777,"samples":275149},{"name":"object.keys + reduce(FN, {})","opsSec":1399920.4264944694,"samples":699961},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":759760.3011757232,"samples":379881},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":565037.5276288863,"samples":282519}]}-->
