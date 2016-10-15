if [ -f creditmutuel-sum.zip ]; then
    rm creditmutuel-sum.zip
fi;
zip --exclude build.sh -r creditmutuel-sum.zip *
