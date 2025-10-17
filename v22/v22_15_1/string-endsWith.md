## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,665,355|45843898|
|(short string) (true) String#slice and strict comparison|62,405,170|31206713|
|(long string) (true) String#endsWith|66,222,314|33117330|
|(long string) (true) String#slice and strict comparison|55,716,540|27877616|
|(short string) (false) String#endsWith|96,235,141|48117578|
|(short string) (false) String#slice and strict comparison|61,663,360|30855047|
|(long string) (false) String#endsWith|88,023,049|44323474|
|(long string) (false) String#slice and strict comparison|55,017,787|27514732|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:16:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45843898,"opsSec":91665355.22105762},{"name":"(short string) (true) String#slice and strict comparison","samples":31206713,"opsSec":62405170.669592805},{"name":"(long string) (true) String#endsWith","samples":33117330,"opsSec":66222314.836068265},{"name":"(long string) (true) String#slice and strict comparison","samples":27877616,"opsSec":55716540.65124248},{"name":"(short string) (false) String#endsWith","samples":48117578,"opsSec":96235141.17978825},{"name":"(short string) (false) String#slice and strict comparison","samples":30855047,"opsSec":61663360.32582282},{"name":"(long string) (false) String#endsWith","samples":44323474,"opsSec":88023049.42795958},{"name":"(long string) (false) String#slice and strict comparison","samples":27514732,"opsSec":55017787.35491852}]}-->
