## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|83,123,061|41561533|
|(short string) (true) String#slice and strict comparison|54,975,055|27488046|
|(long string) (true) String#endsWith|63,939,767|31969905|
|(long string) (true) String#slice and strict comparison|50,460,167|25242333|
|(short string) (false) String#endsWith|92,203,363|46101860|
|(short string) (false) String#slice and strict comparison|55,379,397|27692812|
|(long string) (false) String#endsWith|86,450,713|43225369|
|(long string) (false) String#slice and strict comparison|51,702,506|25851260|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:44:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41561533,"opsSec":83123061.51135467},{"name":"(short string) (true) String#slice and strict comparison","samples":27488046,"opsSec":54975055.610251635},{"name":"(long string) (true) String#endsWith","samples":31969905,"opsSec":63939767.927632704},{"name":"(long string) (true) String#slice and strict comparison","samples":25242333,"opsSec":50460167.18515027},{"name":"(short string) (false) String#endsWith","samples":46101860,"opsSec":92203363.72620256},{"name":"(short string) (false) String#slice and strict comparison","samples":27692812,"opsSec":55379397.583570875},{"name":"(long string) (false) String#endsWith","samples":43225369,"opsSec":86450713.96670152},{"name":"(long string) (false) String#slice and strict comparison","samples":25851260,"opsSec":51702506.66075328}]}-->
