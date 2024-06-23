## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,505,793|752897|
|Function returning explicitly undefined|1,514,978|757490|
|Function returning implicitly undefined|1,540,660|770331|
|Function returning string|1,491,927|745964|
|Function returning integer|1,543,663|771832|
|Function returning float|1,516,975|758488|
|Function returning functions|1,466,687|733344|
|Function returning arrow functions|1,483,502|741752|
|Function returning empty object|1,508,136|754069|
|Function returning empty array|1,495,883|747942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:31:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1505793.5608378365,"samples":752897},{"name":"Function returning explicitly undefined","opsSec":1514978.3548599558,"samples":757490},{"name":"Function returning implicitly undefined","opsSec":1540660.4322866185,"samples":770331},{"name":"Function returning string","opsSec":1491927.3135623161,"samples":745964},{"name":"Function returning integer","opsSec":1543663.6476179021,"samples":771832},{"name":"Function returning float","opsSec":1516975.4417431355,"samples":758488},{"name":"Function returning functions","opsSec":1466687.9147436337,"samples":733344},{"name":"Function returning arrow functions","opsSec":1483502.694797828,"samples":741752},{"name":"Function returning empty object","opsSec":1508136.536715082,"samples":754069},{"name":"Function returning empty array","opsSec":1495883.713101599,"samples":747942}]}-->
