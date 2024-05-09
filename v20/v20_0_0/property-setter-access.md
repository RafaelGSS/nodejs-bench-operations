## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,609,239|7804620|
|Setter|6,269,112|3134557|
|Method|15,265,700|7632851|
|DefineProperty (setter)|15,458,369|7729185|
|DefineProperty (setter & enumerable=false)|6,388,418|3194210|
|DefineProperty (setter & configurable=false)|6,336,478|3168240|
|DefineProperty (setter & enumerable=false & configurable=false)|6,359,259|3179630|
|DefineProperty (writable)|15,336,379|7668190|
|DefineProperty (writable & enumerable=false)|15,522,353|7761177|
|DefineProperty (writable & enumerable=false & configurable=false)|15,643,742|7821872|
|DefineProperties (setter)|15,672,547|7836274|
|DefineProperties (setter & enumerable=false)|6,168,723|3084362|
|DefineProperties (setter & enumerable=false & configurable=false)|6,221,189|3110595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:09:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15609239.985113867,"samples":7804620},{"name":"Setter","opsSec":6269112.920846098,"samples":3134557},{"name":"Method","opsSec":15265700.238420743,"samples":7632851},{"name":"DefineProperty (setter)","opsSec":15458369.697783872,"samples":7729185},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6388418.239276055,"samples":3194210},{"name":"DefineProperty (setter & configurable=false)","opsSec":6336478.634296254,"samples":3168240},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6359259.102430012,"samples":3179630},{"name":"DefineProperty (writable)","opsSec":15336379.290643314,"samples":7668190},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15522353.844565663,"samples":7761177},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15643742.739341484,"samples":7821872},{"name":"DefineProperties (setter)","opsSec":15672547.820641924,"samples":7836274},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6168723.879399453,"samples":3084362},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6221189.712250041,"samples":3110595}]}-->
