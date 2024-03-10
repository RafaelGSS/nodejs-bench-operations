## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,542,501|92|
|{ ...object, __proto__: null }|27,374,583|98|
|{ ...object, newProp: true }|889,090|91|
|structuredClone|261,134|95|
|JSON.parse + JSON.stringify|178,266|96|
|loop + object.keys starting with {}|1,475,576|94|
|loop + object.keys starting with { __proto__: null }|802,976|92|
|loop + object.keys starting with { randomProp: true }|622,959|95|
|object.keys + reduce(FN, {})|591,525|94|
|object.keys + reduce(FN, { __proto__: null })|806,803|92|
|object.keys + reduce(FN, { newProp: true })|614,594|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26542500.68397446,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":27374582.50200396,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":889089.9809202437,"samples":3},{"name":"structuredClone","opsSec":261134.41173481502,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":178266.03666266886,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1475575.5391420044,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":802976.4849972253,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":622959.3794105453,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":591525.0087058485,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":806803.2709332722,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":614593.9211337939,"samples":5}]}-->
