## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,953,803|977016|
|Function returning explicitly undefined|1,844,722|922483|
|Function returning implicitly undefined|1,927,092|964112|
|Function returning string|1,888,703|944352|
|Function returning integer|1,954,012|977102|
|Function returning float|1,944,657|972567|
|Function returning functions|1,869,613|934807|
|Function returning arrow functions|1,919,298|959650|
|Function returning empty object|1,855,366|927685|
|Function returning empty array|1,941,881|970941|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:50:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1953803.2174584484,"samples":977016},{"name":"Function returning explicitly undefined","opsSec":1844722.4412960755,"samples":922483},{"name":"Function returning implicitly undefined","opsSec":1927092.6039322314,"samples":964112},{"name":"Function returning string","opsSec":1888703.8715681366,"samples":944352},{"name":"Function returning integer","opsSec":1954012.2097935842,"samples":977102},{"name":"Function returning float","opsSec":1944657.6522187735,"samples":972567},{"name":"Function returning functions","opsSec":1869613.2297193496,"samples":934807},{"name":"Function returning arrow functions","opsSec":1919298.875290859,"samples":959650},{"name":"Function returning empty object","opsSec":1855366.645497105,"samples":927685},{"name":"Function returning empty array","opsSec":1941881.3086902543,"samples":970941}]}-->
