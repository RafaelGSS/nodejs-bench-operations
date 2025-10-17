## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,100,464|27078560|
|(short string) (true) String#slice and strict comparison|63,638,822|31823522|
|(long string) (true) String#endsWith|50,696,512|25348264|
|(long string) (true) String#slice and strict comparison|59,664,344|29834448|
|(short string) (false) String#endsWith|58,420,703|29224001|
|(short string) (false) String#slice and strict comparison|64,145,404|32084135|
|(long string) (false) String#endsWith|55,634,788|27817858|
|(long string) (false) String#slice and strict comparison|58,432,982|29273828|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:16:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27078560,"opsSec":54100464.69496029},{"name":"(short string) (true) String#slice and strict comparison","samples":31823522,"opsSec":63638822.75504357},{"name":"(long string) (true) String#endsWith","samples":25348264,"opsSec":50696512.38547419},{"name":"(long string) (true) String#slice and strict comparison","samples":29834448,"opsSec":59664344.92309795},{"name":"(short string) (false) String#endsWith","samples":29224001,"opsSec":58420703.40739461},{"name":"(short string) (false) String#slice and strict comparison","samples":32084135,"opsSec":64145404.4725401},{"name":"(long string) (false) String#endsWith","samples":27817858,"opsSec":55634788.45680684},{"name":"(long string) (false) String#slice and strict comparison","samples":29273828,"opsSec":58432982.44061993}]}-->
