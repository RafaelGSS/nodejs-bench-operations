## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|71,583,587|35791802|
|(short string) (true) String#slice and strict comparison|51,393,754|25696918|
|(long string) (true) String#startsWith|51,991,126|25995916|
|(long string) (true) String#slice and strict comparison|45,767,346|22883687|
|(short string) (false) String#startsWith|99,185,338|49594862|
|(short string) (false) String#slice and strict comparison|60,118,482|30085314|
|(long string) (false) String#startsWith|84,393,630|42197011|
|(long string) (false) String#slice and strict comparison|52,720,648|26360451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:46:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":35791802,"opsSec":71583587.96527629},{"name":"(short string) (true) String#slice and strict comparison","samples":25696918,"opsSec":51393754.078356},{"name":"(long string) (true) String#startsWith","samples":25995916,"opsSec":51991126.0644903},{"name":"(long string) (true) String#slice and strict comparison","samples":22883687,"opsSec":45767346.99726527},{"name":"(short string) (false) String#startsWith","samples":49594862,"opsSec":99185338.61943828},{"name":"(short string) (false) String#slice and strict comparison","samples":30085314,"opsSec":60118482.79110754},{"name":"(long string) (false) String#startsWith","samples":42197011,"opsSec":84393630.91991432},{"name":"(long string) (false) String#slice and strict comparison","samples":26360451,"opsSec":52720648.09735877}]}-->
