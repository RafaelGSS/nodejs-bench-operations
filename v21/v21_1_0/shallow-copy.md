## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|34,007,551|91|
|{ ...object, __proto__: null }|2,768,097|96|
|{ ...object, newProp: true }|31,080,367|98|
|structuredClone|284,535|95|
|JSON.parse + JSON.stringify|257,809|99|
|loop + object.keys starting with {}|1,628,952|94|
|loop + object.keys starting with { __proto__: null }|902,811|95|
|loop + object.keys starting with { randomProp: true }|692,991|94|
|object.keys + reduce(FN, {})|679,539|95|
|object.keys + reduce(FN, { __proto__: null })|907,243|97|
|object.keys + reduce(FN, { newProp: true })|708,508|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:08:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":34007551.016957454,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":2768097.2814032724,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":31080367.028073996,"samples":6},{"name":"structuredClone","opsSec":284535.1285208856,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":257809.175355183,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":1628952.1746545853,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":902810.8490368124,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":692990.5625437397,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":679538.8107964882,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":907243.1212571965,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":708508.0692512551,"samples":4}]}-->
