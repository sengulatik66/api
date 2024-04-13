// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { BitvecOrderLsb0, PalletReferendaReferendumInfo, PalletReferendaReferendumStatus, PalletTransactionPaymentChargeTransactionPayment, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesPrimitivesHrmpChannelId, PolkadotPrimitivesV6AssignmentAppPublic, PolkadotPrimitivesV6AsyncBackingAsyncBackingParams, PolkadotPrimitivesV6BackedCandidate, PolkadotPrimitivesV6CandidateCommitments, PolkadotPrimitivesV6CandidateDescriptor, PolkadotPrimitivesV6CandidateReceipt, PolkadotPrimitivesV6CollatorAppPublic, PolkadotPrimitivesV6CollatorAppSignature, PolkadotPrimitivesV6CommittedCandidateReceipt, PolkadotPrimitivesV6DisputeState, PolkadotPrimitivesV6DisputeStatement, PolkadotPrimitivesV6DisputeStatementSet, PolkadotPrimitivesV6ExecutorParams, PolkadotPrimitivesV6ExecutorParamsExecutorParam, PolkadotPrimitivesV6IndexedVecGroupIndex, PolkadotPrimitivesV6IndexedVecValidatorIndex, PolkadotPrimitivesV6InherentData, PolkadotPrimitivesV6InvalidDisputeStatementKind, PolkadotPrimitivesV6PvfCheckStatement, PolkadotPrimitivesV6PvfExecKind, PolkadotPrimitivesV6PvfPrepKind, PolkadotPrimitivesV6ScrapedOnChainVotes, PolkadotPrimitivesV6SessionInfo, PolkadotPrimitivesV6SignedUncheckedSigned, PolkadotPrimitivesV6SlashingDisputeProof, PolkadotPrimitivesV6SlashingDisputesTimeSlot, PolkadotPrimitivesV6SlashingPendingSlashes, PolkadotPrimitivesV6SlashingSlashingOffenceKind, PolkadotPrimitivesV6UpgradeGoAhead, PolkadotPrimitivesV6UpgradeRestriction, PolkadotPrimitivesV6ValidDisputeStatementKind, PolkadotPrimitivesV6ValidatorAppPublic, PolkadotPrimitivesV6ValidatorAppSignature, PolkadotPrimitivesV6ValidityAttestation, PolkadotPrimitivesVstagingApprovalVotingParams, PolkadotRuntimeCommonAuctionsPalletCall, PolkadotRuntimeCommonAuctionsPalletError, PolkadotRuntimeCommonAuctionsPalletEvent, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsPalletCall, PolkadotRuntimeCommonClaimsPalletError, PolkadotRuntimeCommonClaimsPalletEvent, PolkadotRuntimeCommonClaimsPrevalidateAttests, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonCrowdloanFundInfo, PolkadotRuntimeCommonCrowdloanLastContribution, PolkadotRuntimeCommonCrowdloanPalletCall, PolkadotRuntimeCommonCrowdloanPalletError, PolkadotRuntimeCommonCrowdloanPalletEvent, PolkadotRuntimeCommonImplsVersionedLocatableAsset, PolkadotRuntimeCommonParasRegistrarPalletCall, PolkadotRuntimeCommonParasRegistrarPalletError, PolkadotRuntimeCommonParasRegistrarPalletEvent, PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeCommonSlotsPalletCall, PolkadotRuntimeCommonSlotsPalletError, PolkadotRuntimeCommonSlotsPalletEvent, PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin, PolkadotRuntimeNposCompactSolution16, PolkadotRuntimeOriginCaller, PolkadotRuntimeParachainsConfigurationHostConfiguration, PolkadotRuntimeParachainsConfigurationPalletCall, PolkadotRuntimeParachainsConfigurationPalletError, PolkadotRuntimeParachainsDisputesDisputeLocation, PolkadotRuntimeParachainsDisputesDisputeResult, PolkadotRuntimeParachainsDisputesPalletCall, PolkadotRuntimeParachainsDisputesPalletError, PolkadotRuntimeParachainsDisputesPalletEvent, PolkadotRuntimeParachainsDisputesSlashingPalletCall, PolkadotRuntimeParachainsDisputesSlashingPalletError, PolkadotRuntimeParachainsHrmpHrmpChannel, PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest, PolkadotRuntimeParachainsHrmpPalletCall, PolkadotRuntimeParachainsHrmpPalletError, PolkadotRuntimeParachainsHrmpPalletEvent, PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord, PolkadotRuntimeParachainsInclusionCandidatePendingAvailability, PolkadotRuntimeParachainsInclusionPalletCall, PolkadotRuntimeParachainsInclusionPalletError, PolkadotRuntimeParachainsInclusionPalletEvent, PolkadotRuntimeParachainsInclusionUmpQueueId, PolkadotRuntimeParachainsInitializerBufferedSessionChange, PolkadotRuntimeParachainsInitializerPalletCall, PolkadotRuntimeParachainsOriginPalletOrigin, PolkadotRuntimeParachainsParasInherentPalletCall, PolkadotRuntimeParachainsParasInherentPalletError, PolkadotRuntimeParachainsParasPalletCall, PolkadotRuntimeParachainsParasPalletError, PolkadotRuntimeParachainsParasPalletEvent, PolkadotRuntimeParachainsParasParaGenesisArgs, PolkadotRuntimeParachainsParasParaLifecycle, PolkadotRuntimeParachainsParasParaPastCodeMeta, PolkadotRuntimeParachainsParasPvfCheckActiveVoteState, PolkadotRuntimeParachainsParasPvfCheckCause, PolkadotRuntimeParachainsParasReplacementTimes, PolkadotRuntimeParachainsParasSetGoAhead, PolkadotRuntimeParachainsSchedulerCommonAssignment, PolkadotRuntimeParachainsSchedulerPalletCoreOccupied, PolkadotRuntimeParachainsSchedulerPalletParasEntry, PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker, PolkadotRuntimeParachainsSharedPalletCall, PolkadotRuntimeProxyType, PolkadotRuntimeRuntime, PolkadotRuntimeRuntimeFreezeReason, PolkadotRuntimeRuntimeHoldReason, PolkadotRuntimeSessionKeys, SpCoreEcdsaPublic, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpRuntimeMultiSigner, StagingXcmV3MultiLocation, StagingXcmV4Asset, StagingXcmV4AssetAssetFilter, StagingXcmV4AssetAssetId, StagingXcmV4AssetAssetInstance, StagingXcmV4AssetAssets, StagingXcmV4AssetFungibility, StagingXcmV4AssetWildAsset, StagingXcmV4AssetWildFungibility, StagingXcmV4Instruction, StagingXcmV4Junction, StagingXcmV4JunctionNetworkId, StagingXcmV4Junctions, StagingXcmV4Location, StagingXcmV4PalletInfo, StagingXcmV4QueryResponseInfo, StagingXcmV4Response, StagingXcmV4TraitsOutcome, StagingXcmV4Xcm, XcmDoubleEncoded, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedResponse, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    BitvecOrderLsb0: BitvecOrderLsb0;
    PalletReferendaReferendumInfo: PalletReferendaReferendumInfo;
    PalletReferendaReferendumStatus: PalletReferendaReferendumStatus;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesPrimitivesHrmpChannelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    PolkadotPrimitivesV6AssignmentAppPublic: PolkadotPrimitivesV6AssignmentAppPublic;
    PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
    PolkadotPrimitivesV6BackedCandidate: PolkadotPrimitivesV6BackedCandidate;
    PolkadotPrimitivesV6CandidateCommitments: PolkadotPrimitivesV6CandidateCommitments;
    PolkadotPrimitivesV6CandidateDescriptor: PolkadotPrimitivesV6CandidateDescriptor;
    PolkadotPrimitivesV6CandidateReceipt: PolkadotPrimitivesV6CandidateReceipt;
    PolkadotPrimitivesV6CollatorAppPublic: PolkadotPrimitivesV6CollatorAppPublic;
    PolkadotPrimitivesV6CollatorAppSignature: PolkadotPrimitivesV6CollatorAppSignature;
    PolkadotPrimitivesV6CommittedCandidateReceipt: PolkadotPrimitivesV6CommittedCandidateReceipt;
    PolkadotPrimitivesV6DisputeState: PolkadotPrimitivesV6DisputeState;
    PolkadotPrimitivesV6DisputeStatement: PolkadotPrimitivesV6DisputeStatement;
    PolkadotPrimitivesV6DisputeStatementSet: PolkadotPrimitivesV6DisputeStatementSet;
    PolkadotPrimitivesV6ExecutorParams: PolkadotPrimitivesV6ExecutorParams;
    PolkadotPrimitivesV6ExecutorParamsExecutorParam: PolkadotPrimitivesV6ExecutorParamsExecutorParam;
    PolkadotPrimitivesV6IndexedVecGroupIndex: PolkadotPrimitivesV6IndexedVecGroupIndex;
    PolkadotPrimitivesV6IndexedVecValidatorIndex: PolkadotPrimitivesV6IndexedVecValidatorIndex;
    PolkadotPrimitivesV6InherentData: PolkadotPrimitivesV6InherentData;
    PolkadotPrimitivesV6InvalidDisputeStatementKind: PolkadotPrimitivesV6InvalidDisputeStatementKind;
    PolkadotPrimitivesV6PvfCheckStatement: PolkadotPrimitivesV6PvfCheckStatement;
    PolkadotPrimitivesV6PvfExecKind: PolkadotPrimitivesV6PvfExecKind;
    PolkadotPrimitivesV6PvfPrepKind: PolkadotPrimitivesV6PvfPrepKind;
    PolkadotPrimitivesV6ScrapedOnChainVotes: PolkadotPrimitivesV6ScrapedOnChainVotes;
    PolkadotPrimitivesV6SessionInfo: PolkadotPrimitivesV6SessionInfo;
    PolkadotPrimitivesV6SignedUncheckedSigned: PolkadotPrimitivesV6SignedUncheckedSigned;
    PolkadotPrimitivesV6SlashingDisputeProof: PolkadotPrimitivesV6SlashingDisputeProof;
    PolkadotPrimitivesV6SlashingDisputesTimeSlot: PolkadotPrimitivesV6SlashingDisputesTimeSlot;
    PolkadotPrimitivesV6SlashingPendingSlashes: PolkadotPrimitivesV6SlashingPendingSlashes;
    PolkadotPrimitivesV6SlashingSlashingOffenceKind: PolkadotPrimitivesV6SlashingSlashingOffenceKind;
    PolkadotPrimitivesV6UpgradeGoAhead: PolkadotPrimitivesV6UpgradeGoAhead;
    PolkadotPrimitivesV6UpgradeRestriction: PolkadotPrimitivesV6UpgradeRestriction;
    PolkadotPrimitivesV6ValidDisputeStatementKind: PolkadotPrimitivesV6ValidDisputeStatementKind;
    PolkadotPrimitivesV6ValidatorAppPublic: PolkadotPrimitivesV6ValidatorAppPublic;
    PolkadotPrimitivesV6ValidatorAppSignature: PolkadotPrimitivesV6ValidatorAppSignature;
    PolkadotPrimitivesV6ValidityAttestation: PolkadotPrimitivesV6ValidityAttestation;
    PolkadotPrimitivesVstagingApprovalVotingParams: PolkadotPrimitivesVstagingApprovalVotingParams;
    PolkadotRuntimeCommonAuctionsPalletCall: PolkadotRuntimeCommonAuctionsPalletCall;
    PolkadotRuntimeCommonAuctionsPalletError: PolkadotRuntimeCommonAuctionsPalletError;
    PolkadotRuntimeCommonAuctionsPalletEvent: PolkadotRuntimeCommonAuctionsPalletEvent;
    PolkadotRuntimeCommonClaimsEcdsaSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
    PolkadotRuntimeCommonClaimsPalletCall: PolkadotRuntimeCommonClaimsPalletCall;
    PolkadotRuntimeCommonClaimsPalletError: PolkadotRuntimeCommonClaimsPalletError;
    PolkadotRuntimeCommonClaimsPalletEvent: PolkadotRuntimeCommonClaimsPalletEvent;
    PolkadotRuntimeCommonClaimsPrevalidateAttests: PolkadotRuntimeCommonClaimsPrevalidateAttests;
    PolkadotRuntimeCommonClaimsStatementKind: PolkadotRuntimeCommonClaimsStatementKind;
    PolkadotRuntimeCommonCrowdloanFundInfo: PolkadotRuntimeCommonCrowdloanFundInfo;
    PolkadotRuntimeCommonCrowdloanLastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
    PolkadotRuntimeCommonCrowdloanPalletCall: PolkadotRuntimeCommonCrowdloanPalletCall;
    PolkadotRuntimeCommonCrowdloanPalletError: PolkadotRuntimeCommonCrowdloanPalletError;
    PolkadotRuntimeCommonCrowdloanPalletEvent: PolkadotRuntimeCommonCrowdloanPalletEvent;
    PolkadotRuntimeCommonImplsVersionedLocatableAsset: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    PolkadotRuntimeCommonParasRegistrarPalletCall: PolkadotRuntimeCommonParasRegistrarPalletCall;
    PolkadotRuntimeCommonParasRegistrarPalletError: PolkadotRuntimeCommonParasRegistrarPalletError;
    PolkadotRuntimeCommonParasRegistrarPalletEvent: PolkadotRuntimeCommonParasRegistrarPalletEvent;
    PolkadotRuntimeCommonParasRegistrarParaInfo: PolkadotRuntimeCommonParasRegistrarParaInfo;
    PolkadotRuntimeCommonSlotsPalletCall: PolkadotRuntimeCommonSlotsPalletCall;
    PolkadotRuntimeCommonSlotsPalletError: PolkadotRuntimeCommonSlotsPalletError;
    PolkadotRuntimeCommonSlotsPalletEvent: PolkadotRuntimeCommonSlotsPalletEvent;
    PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    PolkadotRuntimeNposCompactSolution16: PolkadotRuntimeNposCompactSolution16;
    PolkadotRuntimeOriginCaller: PolkadotRuntimeOriginCaller;
    PolkadotRuntimeParachainsConfigurationHostConfiguration: PolkadotRuntimeParachainsConfigurationHostConfiguration;
    PolkadotRuntimeParachainsConfigurationPalletCall: PolkadotRuntimeParachainsConfigurationPalletCall;
    PolkadotRuntimeParachainsConfigurationPalletError: PolkadotRuntimeParachainsConfigurationPalletError;
    PolkadotRuntimeParachainsDisputesDisputeLocation: PolkadotRuntimeParachainsDisputesDisputeLocation;
    PolkadotRuntimeParachainsDisputesDisputeResult: PolkadotRuntimeParachainsDisputesDisputeResult;
    PolkadotRuntimeParachainsDisputesPalletCall: PolkadotRuntimeParachainsDisputesPalletCall;
    PolkadotRuntimeParachainsDisputesPalletError: PolkadotRuntimeParachainsDisputesPalletError;
    PolkadotRuntimeParachainsDisputesPalletEvent: PolkadotRuntimeParachainsDisputesPalletEvent;
    PolkadotRuntimeParachainsDisputesSlashingPalletCall: PolkadotRuntimeParachainsDisputesSlashingPalletCall;
    PolkadotRuntimeParachainsDisputesSlashingPalletError: PolkadotRuntimeParachainsDisputesSlashingPalletError;
    PolkadotRuntimeParachainsHrmpHrmpChannel: PolkadotRuntimeParachainsHrmpHrmpChannel;
    PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest;
    PolkadotRuntimeParachainsHrmpPalletCall: PolkadotRuntimeParachainsHrmpPalletCall;
    PolkadotRuntimeParachainsHrmpPalletError: PolkadotRuntimeParachainsHrmpPalletError;
    PolkadotRuntimeParachainsHrmpPalletEvent: PolkadotRuntimeParachainsHrmpPalletEvent;
    PolkadotRuntimeParachainsInclusionAggregateMessageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
    PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord;
    PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: PolkadotRuntimeParachainsInclusionCandidatePendingAvailability;
    PolkadotRuntimeParachainsInclusionPalletCall: PolkadotRuntimeParachainsInclusionPalletCall;
    PolkadotRuntimeParachainsInclusionPalletError: PolkadotRuntimeParachainsInclusionPalletError;
    PolkadotRuntimeParachainsInclusionPalletEvent: PolkadotRuntimeParachainsInclusionPalletEvent;
    PolkadotRuntimeParachainsInclusionUmpQueueId: PolkadotRuntimeParachainsInclusionUmpQueueId;
    PolkadotRuntimeParachainsInitializerBufferedSessionChange: PolkadotRuntimeParachainsInitializerBufferedSessionChange;
    PolkadotRuntimeParachainsInitializerPalletCall: PolkadotRuntimeParachainsInitializerPalletCall;
    PolkadotRuntimeParachainsOriginPalletOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    PolkadotRuntimeParachainsParasInherentPalletCall: PolkadotRuntimeParachainsParasInherentPalletCall;
    PolkadotRuntimeParachainsParasInherentPalletError: PolkadotRuntimeParachainsParasInherentPalletError;
    PolkadotRuntimeParachainsParasPalletCall: PolkadotRuntimeParachainsParasPalletCall;
    PolkadotRuntimeParachainsParasPalletError: PolkadotRuntimeParachainsParasPalletError;
    PolkadotRuntimeParachainsParasPalletEvent: PolkadotRuntimeParachainsParasPalletEvent;
    PolkadotRuntimeParachainsParasParaGenesisArgs: PolkadotRuntimeParachainsParasParaGenesisArgs;
    PolkadotRuntimeParachainsParasParaLifecycle: PolkadotRuntimeParachainsParasParaLifecycle;
    PolkadotRuntimeParachainsParasParaPastCodeMeta: PolkadotRuntimeParachainsParasParaPastCodeMeta;
    PolkadotRuntimeParachainsParasPvfCheckActiveVoteState: PolkadotRuntimeParachainsParasPvfCheckActiveVoteState;
    PolkadotRuntimeParachainsParasPvfCheckCause: PolkadotRuntimeParachainsParasPvfCheckCause;
    PolkadotRuntimeParachainsParasReplacementTimes: PolkadotRuntimeParachainsParasReplacementTimes;
    PolkadotRuntimeParachainsParasSetGoAhead: PolkadotRuntimeParachainsParasSetGoAhead;
    PolkadotRuntimeParachainsSchedulerCommonAssignment: PolkadotRuntimeParachainsSchedulerCommonAssignment;
    PolkadotRuntimeParachainsSchedulerPalletCoreOccupied: PolkadotRuntimeParachainsSchedulerPalletCoreOccupied;
    PolkadotRuntimeParachainsSchedulerPalletParasEntry: PolkadotRuntimeParachainsSchedulerPalletParasEntry;
    PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker: PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker;
    PolkadotRuntimeParachainsSharedPalletCall: PolkadotRuntimeParachainsSharedPalletCall;
    PolkadotRuntimeProxyType: PolkadotRuntimeProxyType;
    PolkadotRuntimeRuntime: PolkadotRuntimeRuntime;
    PolkadotRuntimeRuntimeFreezeReason: PolkadotRuntimeRuntimeFreezeReason;
    PolkadotRuntimeRuntimeHoldReason: PolkadotRuntimeRuntimeHoldReason;
    PolkadotRuntimeSessionKeys: PolkadotRuntimeSessionKeys;
    SpCoreEcdsaPublic: SpCoreEcdsaPublic;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Public: SpCoreEd25519Public;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpRuntimeMultiSigner: SpRuntimeMultiSigner;
    StagingXcmV3MultiLocation: StagingXcmV3MultiLocation;
    StagingXcmV4Asset: StagingXcmV4Asset;
    StagingXcmV4AssetAssetFilter: StagingXcmV4AssetAssetFilter;
    StagingXcmV4AssetAssetId: StagingXcmV4AssetAssetId;
    StagingXcmV4AssetAssetInstance: StagingXcmV4AssetAssetInstance;
    StagingXcmV4AssetAssets: StagingXcmV4AssetAssets;
    StagingXcmV4AssetFungibility: StagingXcmV4AssetFungibility;
    StagingXcmV4AssetWildAsset: StagingXcmV4AssetWildAsset;
    StagingXcmV4AssetWildFungibility: StagingXcmV4AssetWildFungibility;
    StagingXcmV4Instruction: StagingXcmV4Instruction;
    StagingXcmV4Junction: StagingXcmV4Junction;
    StagingXcmV4JunctionNetworkId: StagingXcmV4JunctionNetworkId;
    StagingXcmV4Junctions: StagingXcmV4Junctions;
    StagingXcmV4Location: StagingXcmV4Location;
    StagingXcmV4PalletInfo: StagingXcmV4PalletInfo;
    StagingXcmV4QueryResponseInfo: StagingXcmV4QueryResponseInfo;
    StagingXcmV4Response: StagingXcmV4Response;
    StagingXcmV4TraitsOutcome: StagingXcmV4TraitsOutcome;
    StagingXcmV4Xcm: StagingXcmV4Xcm;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedAssets: XcmVersionedAssets;
    XcmVersionedLocation: XcmVersionedLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
