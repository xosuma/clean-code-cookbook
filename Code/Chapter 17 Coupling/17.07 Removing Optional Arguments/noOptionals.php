<? 

final class Poll {
    
    function _construct(
        array $questions,
        AnonnyomousStrategy $annonymousStrategy,
        ValidationPolicy $validationPolicy) {
        // ...
    }
}

// 유효하지 않습니다.
new Poll([]);
new Poll([], new NoAnonnyomousValidStrategy());
new Poll([], , new StrictValidationPolicy());

// 유효합니다.
new Poll(
    [], 
    new NoAnonnyomousValidStrategy(), new StrictValidationPolicy()
);