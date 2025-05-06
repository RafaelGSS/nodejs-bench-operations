## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,387,304|49193663|
|Setter|10,613,172|5312898|
|Method|92,904,235|46452125|
|DefineProperty (setter)|97,093,288|48557590|
|DefineProperty (setter & enumerable=false)|10,623,481|5311994|
|DefineProperty (setter & configurable=false)|10,648,468|5324235|
|DefineProperty (setter & enumerable=false & configurable=false)|10,666,996|5333500|
|DefineProperty (writable)|97,473,739|48737976|
|DefineProperty (writable & enumerable=false)|91,549,196|45781501|
|DefineProperty (writable & enumerable=false & configurable=false)|96,792,580|48396764|
|DefineProperties (setter)|96,706,442|48353251|
|DefineProperties (setter & enumerable=false)|10,747,328|5373666|
|DefineProperties (setter & enumerable=false & configurable=false)|10,643,294|5321650|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:31:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":49193663,"opsSec":98387304.74834216},{"name":"Setter","samples":5312898,"opsSec":10613172.90441095},{"name":"Method","samples":46452125,"opsSec":92904235.87855615},{"name":"DefineProperty (setter)","samples":48557590,"opsSec":97093288.3762698},{"name":"DefineProperty (setter & enumerable=false)","samples":5311994,"opsSec":10623481.451157447},{"name":"DefineProperty (setter & configurable=false)","samples":5324235,"opsSec":10648468.509214409},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5333500,"opsSec":10666996.991906848},{"name":"DefineProperty (writable)","samples":48737976,"opsSec":97473739.5410599},{"name":"DefineProperty (writable & enumerable=false)","samples":45781501,"opsSec":91549196.19811493},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48396764,"opsSec":96792580.01347136},{"name":"DefineProperties (setter)","samples":48353251,"opsSec":96706442.42883147},{"name":"DefineProperties (setter & enumerable=false)","samples":5373666,"opsSec":10747328.001993984},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5321650,"opsSec":10643294.465486879}]}-->
