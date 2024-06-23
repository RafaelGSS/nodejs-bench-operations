## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,671,887|835944|
|Function returning explicitly undefined|1,641,878|820940|
|Function returning implicitly undefined|1,666,371|833186|
|Function returning string|1,638,199|819100|
|Function returning integer|1,665,319|832660|
|Function returning float|1,661,276|830639|
|Function returning functions|1,630,798|815400|
|Function returning arrow functions|1,646,430|823216|
|Function returning empty object|1,666,666|833334|
|Function returning empty array|1,668,800|834401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:33:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1671887.0971809654,"samples":835944},{"name":"Function returning explicitly undefined","opsSec":1641878.1282586257,"samples":820940},{"name":"Function returning implicitly undefined","opsSec":1666371.003510089,"samples":833186},{"name":"Function returning string","opsSec":1638199.4921569843,"samples":819100},{"name":"Function returning integer","opsSec":1665319.5536939935,"samples":832660},{"name":"Function returning float","opsSec":1661276.8969115464,"samples":830639},{"name":"Function returning functions","opsSec":1630798.6366516557,"samples":815400},{"name":"Function returning arrow functions","opsSec":1646430.6927347884,"samples":823216},{"name":"Function returning empty object","opsSec":1666666.9499994782,"samples":833334},{"name":"Function returning empty array","opsSec":1668800.5414679786,"samples":834401}]}-->
