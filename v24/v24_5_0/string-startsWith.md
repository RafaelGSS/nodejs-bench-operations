## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,753,748|42928930|
|(short string) (true) String#slice and strict comparison|55,153,072|27576557|
|(long string) (true) String#startsWith|65,052,071|32526572|
|(long string) (true) String#slice and strict comparison|50,857,880|25431521|
|(short string) (false) String#startsWith|91,442,210|45721135|
|(short string) (false) String#slice and strict comparison|56,016,764|28008387|
|(long string) (false) String#startsWith|84,144,465|42076124|
|(long string) (false) String#slice and strict comparison|52,114,082|26059833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:46:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42928930,"opsSec":85753748.08951947},{"name":"(short string) (true) String#slice and strict comparison","samples":27576557,"opsSec":55153072.083665214},{"name":"(long string) (true) String#startsWith","samples":32526572,"opsSec":65052071.1612424},{"name":"(long string) (true) String#slice and strict comparison","samples":25431521,"opsSec":50857880.230303906},{"name":"(short string) (false) String#startsWith","samples":45721135,"opsSec":91442210.01391022},{"name":"(short string) (false) String#slice and strict comparison","samples":28008387,"opsSec":56016764.029015996},{"name":"(long string) (false) String#startsWith","samples":42076124,"opsSec":84144465.81493464},{"name":"(long string) (false) String#slice and strict comparison","samples":26059833,"opsSec":52114082.184550256}]}-->
