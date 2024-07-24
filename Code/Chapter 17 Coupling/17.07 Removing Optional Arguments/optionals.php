<?

final class Poll {
    
    function _construct(
        array $questions,
        bool $annonymousAllowed = false,
        $validationPolicy = 'Normal') {
        
        if ($validationPolicy == 'Normal') {
          $validationPolicy = new NormalValidationPolicy();
        }
        // ...
    }
}

// 유효합니다.
new Poll([]);
new Poll([], true);
new Poll([], true , new NormalValidationPolicy());
new Poll([], , new StrictValidationPolicy());