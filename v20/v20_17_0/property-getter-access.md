## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|18,208,976|9104489|
|Getter|13,908,006|6954004|
|Method|17,956,883|8978442|
|DefineProperty (getter)|17,614,005|8807003|
|DefineProperty (getter & enumerable=false)|14,123,035|7061518|
|DefineProperty (getter & configurable=false)|17,560,858|8780430|
|DefineProperty (getter & enumerable=false & configurable=false)|13,952,682|6976342|
|DefineProperty (writable)|18,011,727|9005864|
|DefineProperty (writable & enumerable=false)|18,487,579|9243790|
|DefineProperty (writable & enumerable=false & configurable=false)|18,143,341|9071671|
|DefineProperties (getter)|13,585,146|6792574|
|DefineProperties (getter & enumerable=false)|13,651,237|6825621|
|DefineProperties (getter & enumerable=false & configurable=false)|13,780,239|6890120|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":18208976.251828782,"samples":9104489},{"name":"Getter","opsSec":13908006.775897661,"samples":6954004},{"name":"Method","opsSec":17956883.533622842,"samples":8978442},{"name":"DefineProperty (getter)","opsSec":17614005.049046665,"samples":8807003},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14123035.519728875,"samples":7061518},{"name":"DefineProperty (getter & configurable=false)","opsSec":17560858.736218274,"samples":8780430},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13952682.325851353,"samples":6976342},{"name":"DefineProperty (writable)","opsSec":18011727.459651925,"samples":9005864},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18487579.520181783,"samples":9243790},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18143341.527843926,"samples":9071671},{"name":"DefineProperties (getter)","opsSec":13585146.559694247,"samples":6792574},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13651237.87735357,"samples":6825621},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13780239.42089226,"samples":6890120}]}-->
