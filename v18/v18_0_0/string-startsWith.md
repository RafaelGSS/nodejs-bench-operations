## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|52,564,478|26284247|
|(short string) (true) String#slice and strict comparison|47,713,609|23862004|
|(long string) (true) String#startsWith|49,951,753|24975891|
|(long string) (true) String#slice and strict comparison|44,009,679|22010824|
|(short string) (false) String#startsWith|56,278,061|28139041|
|(short string) (false) String#slice and strict comparison|54,739,748|27374226|
|(long string) (false) String#startsWith|53,004,066|26502254|
|(long string) (false) String#slice and strict comparison|48,954,746|24486472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:20:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":26284247,"opsSec":52564478.17899608},{"name":"(short string) (true) String#slice and strict comparison","samples":23862004,"opsSec":47713609.67761574},{"name":"(long string) (true) String#startsWith","samples":24975891,"opsSec":49951753.42759704},{"name":"(long string) (true) String#slice and strict comparison","samples":22010824,"opsSec":44009679.039669015},{"name":"(short string) (false) String#startsWith","samples":28139041,"opsSec":56278061.96500994},{"name":"(short string) (false) String#slice and strict comparison","samples":27374226,"opsSec":54739748.81785595},{"name":"(long string) (false) String#startsWith","samples":26502254,"opsSec":53004066.05209726},{"name":"(long string) (false) String#slice and strict comparison","samples":24486472,"opsSec":48954746.345869325}]}-->
